const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[1, 2, 3], [], []];
  }

  promptMove(callback) {
    console.log(this.stacks);
    reader.question("Enter your starting and ending stacks (eg. 1, 3): ", (response) => {
      let positions = response.split(', ');
      let startTowerIdx = parseInt(positions[0]);
      let endTowerIdx = parseInt(positions[1]);
      callback(startTowerIdx, endTowerIdx);
    });
  }

  isValidMove(start, end) {
    if (this.stacks[start].length === 0){
      return false;
    }else if (this.stacks[end].length === 0) {
      return true;
    }else{
      return (this.stacks[start] > this.stacks[end]);
    }
  }

  move(start, end) {
    if (this.isValidMove(start, end)) {
      this.stacks[end].push(this.stacks[start].pop());
      return true;
    }else{
      return false;
    }
  }
}


let game = new Game();
console.log(game.move(0, 2));
console.log(game.stacks);
console.log(game.move(2, 1));
console.log(game.stacks);
console.log(game.move(2, 1));
console.log(game.stacks);
console.log(game.move(0, 1));
console.log(game.stacks);
