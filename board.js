class Board {
  constructor() {
    this.grid = [ new Array(3), new Array(3), new Array(3) ];
  }

  render() {
    this.grid.forEach( row => console.log(row));
  }

  won() {
    let checks = [this.checkHorizontals(), this.checkVerticals(), this.checkDiagonals()];
    if (checks.some( (el) => el === "X") ){
      return "X";
    }else if(checks.some( (el) => el === "O") ){
      return "O";
    }else{
      return false;
    }
  }

  markAt(pos) {
    let row = pos[0];
    let col = pos[1];
    return this.grid[row][col];
  }

  isEmpty(pos) {
    return (this.markAt(pos) === undefined);
  }

  placeMark(pos, mark) {
    if (this.isEmpty(pos)) {
      let row = pos[0],
          col = pos[1];
      this.grid[row][col] = mark;
    } else {
      throw "Illegal move!";
    }
  }

  checkHorizontals() {
    this.grid.forEach( (row) => {
      if (row.every( (el) => el === "X" )) {
        return "X";
      } else if (row.every( (el) => el === "O" )) {
        return "O";
      } else {
        return false;
      }
    });
  }

  checkVerticals() {
    [0, 1, 2].forEach( (colIdx) => {
      if ([0, 1, 2].every( (rowIdx) => this.markAt([rowIdx, colIdx]) === "X")) {
        return "X";
      } else if ([0, 1, 2].every( (rowIdx) => this.markAt([rowIdx, colIdx]) === "O")) {
        return "O";
      } else {
        return false;
      }
    });
  }

  checkDiagonals() {
    let firstDiag = [this.markAt([0, 0]), this.markAt([1, 1]), this.markAt([2, 2])];
    let secondDiag = [this.markAt([0, 2]), this.markAt([1, 1]), this.markAt([2, 0])];

    if (firstDiag.every( (el) => el === "X" ) || (secondDiag.every( (el) => el === "X"))){
      return "X";
    }else if (firstDiag.every( (el) => el === "O" ) || (secondDiag.every( (el) => el === "O"))){
      return "O";
    }else{
      return false;
    }
  }
}

module.exports = Board;
