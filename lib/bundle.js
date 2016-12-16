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

	const Game = __webpack_require__(4);
	window.Game = Game;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(2);
	const Util = __webpack_require__(3);

	const Asteroid = function (position) {
	  Asteroid.COLOR = "grey";
	  Asteroid.RADIUS = 10;

	  let pos = position.pos;
	  let options = {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: Util.randomVec(4)};
	  MovingObject.call(this, options);

	};

	Util.inherits(Asteroid, MovingObject);


	module.exports = Asteroid;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const MovingObject = function (properties) {
	    this.position = properties.pos;
	    this.color = properties.color;
	    this.velocity = properties.vel;
	    this.radius = properties.radius;
	};

	MovingObject.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.position[0],
	    this.position[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );

	  ctx.fill();
	};

	MovingObject.prototype.move = function () {
	  this.position[0] += this.velocity[0];
	  this.position[1] += this.velocity[1];
	};

	MovingObject.prototype.thing = function () {
	  console.log("thing!");
	};

	module.exports = MovingObject;


/***/ },
/* 3 */
/***/ function(module, exports) {

	const Util = function (){};

	Util.inherits = function (childClass, parentClass) {
	  let surrogate = function () {};
	  surrogate.prototype = parentClass.prototype;
	  childClass.prototype = new surrogate();
	  childClass.prototype.constructor = childClass;
	};


	// Return a randomly oriented vector with the given length.
	Util.randomVec = function (length) {
	  const deg = 2 * Math.PI * Math.random();
	  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	};

	// Scale the length of a vector by the given amount.
	Util.scale = function (vec, m) {
	  return [vec[0] * m, vec[1] * m];
	};

	module.exports = Util;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(1);

	const Game = function () {
	  Game.DIM_X = 1920;
	  Game.DIM_Y = 1080;
	  Game.NUM_ASTEROIDS = 10;
	  this.asteroids = [];
	  this.addAsteroids();

	};

	Game.prototype.addAsteroids = function () {
	  for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
	    this.asteroids.push(new Asteroid(
	      {pos : this.randomPosition()} ));
	  }
	};

	Game.prototype.randomPosition = function () {
	  let x = Math.floor(Math.random() * Game.DIM_X);
	  let y = Math.floor(Math.random() * Game.DIM_Y);
	  return [x,y];
	};

	Game.prototype.draw = function (ctx) {
	  ctx.clearRect();
	  this.asteroids.forEach(function (el) {
	    el.draw();
	  });
	};

	Game.prototype.moveObjects = function () {
	  this.asteroids.forEach( function (el) {
	    el.move();
	  });
	};

	module.exports = Game;


/***/ }
/******/ ]);