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
      that.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    let that = this;
    let row = Math.floor($square.attr('id')/3);
    let col = $square.attr('id') % 3;
    this.game.playMove([row, col]);
    $square.text(this.game.currentPlayer);
    $square.addClass(`${that.game.currentPlayer}`);
  }

  setupBoard() {
    let $grid = $("<ul>");
    for(let i = 0; i < 9; i++){
      const $li = $("<li>");
      $li.attr('id', i);
      $grid.append($li);
    }

    this.$el.append($grid);
  }
}

module.exports = View;
