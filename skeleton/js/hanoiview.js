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
      $disk.attr("id", `disk${i}`);

      $pile1.append($disk);

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
        let $pile = $(`#pile${towerIdx + 1}`);
        debugger;
        if (tower.includes(diskIdx) && $(`ul#pile${towerIdx + 1} li#disk${diskIdx}`).length === 0) {
          debugger;
          $pile.append($disk);
          debugger;
        }
      }
    });
  }
}

module.exports = HanoiView;
