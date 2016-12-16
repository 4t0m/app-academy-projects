
const Board = require('./board.js');

class Game {
  constructor(reader) {
    this.reader = reader;
    this.board = new Board;
  }

  run(reader, completionCallback, currentMark = "X") {

    this.board.render();

    let move = this.promptMove();
    if (this.board.isEmpty(move)){
      this.board.placeMark(move, currentMark);
      if (this.board.won()) {
        console.log(this.board.won + " wins!");
        completionCallback();
      }else{
        currentMark = (currentMark === "X" ? "O" : "X");
        run(reader, completionCallback, currentMark);
      }
    }else{
      console.log("nah bro");
      run(reader, completionCallback, currentMark);
    }
  }

  promptMove() {
    this.reader.question("Enter move (ex: 2, 0): ", (answer) => {
      return answer.split(", ").map(el => parseInt(el));
    });
  }
}




module.exports = Game;
