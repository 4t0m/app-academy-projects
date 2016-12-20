/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const HanoiGame = __webpack_require__(1);
	const HanoiView = __webpack_require__(2);

	$( () => {
	  let $rootEl = $('.hanoi');
	  let game = new HanoiGame();
	  let hanoiView = new HanoiView(game, $rootEl);
	  window.hanoiView = hanoiView;
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Game {
	  constructor() {
	    this.towers = [[3, 2, 1], [], []];
	  }

	  isValidMove(startTowerIdx, endTowerIdx) {
	      const startTower = this.towers[startTowerIdx];
	      const endTower = this.towers[endTowerIdx];
	      if (startTower.length === 0) {
	        return false;
	      } else if (endTower.length == 0) {
	        return true;
	      } else {
	        const topStartDisc = startTower[startTower.length - 1];
	        const topEndDisc = endTower[endTower.length - 1];
	        return topStartDisc < topEndDisc;
	      }
	  }

	  isWon() {
	      // move all the discs to the last or second tower
	      return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	  }

	  move(startTowerIdx, endTowerIdx) {

	      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	        return true;
	      } else {
	        return false;
	      }
	  }

	  print() {
	      console.log(JSON.stringify(this.towers));
	  }

	  promptMove(reader, callback) {
	      this.print();
	      reader.question("Enter a starting tower: ", start => {
	        const startTowerIdx = parseInt(start);
	        reader.question("Enter an ending tower: ", end => {
	          const endTowerIdx = parseInt(end);
	          callback(startTowerIdx, endTowerIdx)
	        });
	      });
	  }

	  run(reader, gameCompletionCallback) {
	      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
	        if (!this.move(startTowerIdx, endTowerIdx)) {
	          console.log("Invalid move!");
	        }

	        if (!this.isWon()) {
	          // Continue to play!
	          this.run(reader, gameCompletionCallback);
	        } else {
	          this.print();
	          console.log("You win!");
	          gameCompletionCallback();
	        }
	      });
	  }
	}

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class HanoiView {
	  constructor(game, $el){
	    this.game = game;
	    this.$el = $el;
	    this.setupTowers();
	    this.render();
	  }

	  setupTowers(){
	    let $board = $("<container>");
	    let $pile1 = $("<ul>");
	    $pile1.attr("id", `pile1`);
	    let $pile2 = $("<ul>");
	    $pile2.attr("id", `pile2`);
	    let $pile3 = $("<ul>");
	    $pile3.attr("id", `pile3`);
	    for(let i = 1; i <= 3; i++){
	      let $disk = $("<li>");
	      let $blank = $("<li>");
	      let $blank2 = $("<li>");
	      $blank.addClass("blank");
	      $blank2.addClass("blank");
	      $disk.attr("id", `disk${i}`);
	      $pile1.append($disk);
	      $pile2.append($blank);
	      $pile3.append($blank2);
	    }
	    let that = this;
	    [$pile1, $pile2, $pile3].forEach(function (tower){

	      that.$el.append(tower);
	      tower.on("click", (event) => {
	        const currentTarget = event.currentTarget;
	        const $currentTarget = $(currentTarget);

	        if (that.$originTower !== undefined) {
	          let $destinationTower = $currentTarget;
	          let originId = that.$originTower.attr("id"),
	              destinationId = $destinationTower.attr("id");

	          let originIndex = parseInt(originId.slice(originId.length - 1)),
	              destinationIndex = parseInt(destinationId.slice(destinationId.length - 1));

	          that.game.move(originIndex-1, destinationIndex-1);
	          that.render();
	          that.$originTower = undefined;
	        } else {
	          that.$originTower = $currentTarget;
	        }
	      });
	    });
	  }

	  render(){
	    this.game.towers.forEach(function (tower, towerIdx) {
	      for (let diskIdx = 1; diskIdx < 3; diskIdx++) {
	        let $disk = $(`#disk${diskIdx}`);
	        let $originPile = $disk.parent();
	        let $destPile = $(`#pile${towerIdx + 1}`);
	        if (tower.includes(diskIdx) && $(`ul#pile${towerIdx + 1} li#disk${diskIdx}`).length === 0) {

	          $(".blank").remove();
	          $destPile.prepend($disk);
	          while($destPile.children().length !== 3){
	            debugger;
	            $destPile.prepend($("<li>").addClass("blank"));
	          }

	          $originPile.prepend($("<li>").addClass("blank"));

	        }
	      }
	    });
	  }
	}

	module.exports = HanoiView;


/***/ }
/******/ ]);