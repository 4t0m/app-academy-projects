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
      if (!that.game.isOver()) {
        const currentTarget = event.currentTarget;
        const $currentTarget = $(currentTarget);
        $currentTarget.addClass("hovered");
      }
    },
    mouseleave: (event) => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);

      $currentTarget.removeClass("hovered");
    }
  });

    $("li").on("click", (event) => {
      if (!that.game.isOver()) {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      $currentTarget.addClass("clicked");
      that.makeMove($currentTarget);
    }
    });
  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    let that = this;
    let row = Math.floor($square.attr('id')/3);
    let col = $square.attr('id') % 3;
    if (this.game.board.isEmptyPos([row, col])) {
      this.game.playMove([row, col]);
      $square.text(currentPlayer);
      $square.addClass(`${currentPlayer}`);
      if(that.game.isOver()){
        let $winMsg = $(`<h2>${currentPlayer} WINS!</h2>`);
        that.$el.append($winMsg);
      }
    } else {
      alert("Invalid move.  Pick an empty square!");
    }
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
