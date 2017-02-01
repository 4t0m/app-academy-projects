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
    let that = this;
    $("li").remove();
    this.game.towers.forEach(function (tower, towerIdx) {
      let $pile = $(`pile${towerIdx+1}`);
      tower.forEach(function (disk, diskIdx){
        let $disk = $("<li>");
        $disk.attr("id", `disk${diskIdx+1}`);
        $pile.append($disk);
      });
      while($pile.children().length !== 3){
        $pile.append($("<li>").addClass("blank"));
      }

      that.$el.append($pile);
    });
  }
}

module.exports = HanoiView;
