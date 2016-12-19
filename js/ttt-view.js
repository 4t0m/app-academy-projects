class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

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
