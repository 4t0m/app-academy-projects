class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }



  bindEvents() {
    let that = this;
    $("li").on({ mouseenter: (event) => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);

      $currentTarget.addClass("hovered");
      // event.addClass("hovered");
    },
      mouseleave: (event) => {
        const currentTarget = event.currentTarget;
        const $currentTarget = $(currentTarget);

        $currentTarget.removeClass("hovered");
      }
    });

    $("li").on("click", (event) => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      $currentTarget.addClass("clicked");
      that.makeMove(el);
    });
  }

  makeMove($square) {

    this.game.playMove($square);
    this.game.swapTurn();
  }

  setupBoard() {
    let $grid = $("<ul>");
    for(let i = 0; i < 9; i++){
      const $li = $("<li>");
      $grid.append($li);
    }

    this.$el.append($grid);
  }
}

module.exports = View;
