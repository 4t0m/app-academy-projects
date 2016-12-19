class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }



  bindEvents() {
    $("li").on("hover", (el) => el.addClass("hovered"));
    $("li").on("click", (el) => el.addClass("clicked"));
  }

  makeMove($square) {}

  setupBoard() {
    let grid = $("<ul></ul>");
    for(let i = 0; i < 9; i++){
      const li = $("<li></li>");
      grid.appendChild(li);
    }

  }
}

module.exports = View;
