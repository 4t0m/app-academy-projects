class HanoiView {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers(){
    let $pile1 = $("<ul>");
    let $pile2 = $("<ul>");
    let $pile3 = $("<ul>");
    for(let i = 3; i <= 1; i--){
      let $disc = $("<li>");
      $disc.attr("id", i);
      $pile1.append($disc);
    }
    this.$el.append($pile1);
    this.$el.append($pile2);
    this.$el.append($pile3);
  }

  render(){
    this.game.towers.forEach(function (tower) {
      
    });
  }
}
