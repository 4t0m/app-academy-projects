require_relative "tile"

class Board

  SOLVED_STRING = "123456789"

  attr_reader :grid

  def initialize(grid)
    @grid = grid
  end

  def self.from_file(filename)
    File.readlines(filename).map do |line|
      row = line.chomp.chars
      row.map do |char|
        Tile.new(char)
      end
    end
  end

  def [](position)
    row, col = position
    grid[row][col]
  end

  def update_value(position, value)
    return if self[position].given
    #ACTUALLY UPDATE
    self[position].value = value
  end

  def render
    @grid.each do |row|
      row.each do |tile|
        print tile
      end
      print "\n"
    end
  end

  def solved?
    return false unless solved_rows?
    return false unless solved_cols?
    return false unless solved_squares?
    true
  end

  def solved_rows?
    @grid.each do |row|
      checker = []
      9.times do |col|
        checker << @grid[row][col].value
      end
      return false unless checker.sort.join == SOLVED_STRING
    end
    true
  end

  def solved_cols?
    9.times do |col|
      checker = []
      9.times do |row|
        checker << @grid[row][col].value
      end
      return false unless checker.sort.join == SOLVED_STRING
    end
    true
  end

  def solved_squares?
    start_points = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6,0], [6,3], [6,6]]
    start_points.all? { |start_point| solved_square?(start_point) }
  end

  def solved_square?(start_point)
    start_row, start_col = start_point
    checker = []
    3.times do |delta_row|
      3.times do |delta_col|
        checker << @grid[start_row + delta_row][start_col + delta_col].value
      end
    end

    checker.sort.join == SOLVED_STRING
  end

end

if __FILE__ == $PROGRAM_NAME

  board = Board.new(Board.from_file("sudoku1-solved.txt"))
  board.render
  print board.solved?
  # board.update_value([0, 1], "1")
  # board.render

end
