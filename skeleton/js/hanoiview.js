class HanoiView {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers(){
    let $pile1 = $("<ul>");
    $pile1.attr("id", `pile1`);
    $pile2.attr("id", `pile2`);
    $pile3.attr("id", `pile3`);

    let $pile2 = $("<ul>");
    let $pile3 = $("<ul>");
    for(let i = 3; i <= 1; i--){
      let $disk = $("<li>");
      $disk.attr("id", `disk${i}`);

      $pile1.append($disk);
    }
    this.$el.append($pile1);
    this.$el.append($pile2);
    this.$el.append($pile3);
  }

  render(){
    this.game.towers.forEach(function (tower, towerIdx) {
      for (let diskIdx = 1; diskIdx < 3; diskIdx++) {
        let $disk = $(`#disk${diskIdx}`);
        let $pile = $(`#pile${towerIdx}`);
        if (tower.includes(diskIdx) && $(`ul#pile${towerIdx} li#disk${diskIdx}`).length === 0) {
          $pile.append($disk);
        }
        if (!tower.includes(diskIdx) && $(`ul#pile${towerIdx} li#disk${diskIdx}`).length === 1) {
          $pile.remove($disk);
        }
      }
    });
  }
}
