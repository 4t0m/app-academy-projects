require_relative "piece"

class Board

  STARTING_POSITIONS = {
    rook: [[0,0], [0,7], [7,0], [7,7]],
    knight: [[0,1], [0,6], [7,1], [7,6]],
    bishop: [[0,2], [0,5], [7,2], [7,5]],
    king: [[0,3], [7,3]],
    queen: [[0,4], [7,4]]
  }.freeze

  def self.setup

    board = Board.empty_board

    # set non-pawn pieces
    STARTING_POSITIONS.each do |piece, positions|
      positions.each do |pos|
        color = pos.first == 0 ? :red : :white
        board[pos] = Kernel.const_get(piece.to_s.capitalize).new(pos, board, color)
      end
    end

    # set pawns + null piece
    (0..7).each do |col|
      board.grid[1][col] = Pawn.new([1, col], board, :red)
      board.grid[6][col] = Pawn.new([6, col], board, :white)

      (2..5).each do |row|
        board.grid[row][col] = NullPiece.instance
      end

    end

    board
  end

  def self.empty_board
    grid = Array.new(8) { Array.new(8) }
    self.new(grid)
  end

  attr_accessor :grid

  def initialize(grid)
    @grid = grid
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end

  def move_piece(start_pos, end_pos)
    piece = self[start_pos]
    p piece.moves
    raise "Invalid move" unless piece.moves.include?(end_pos)
    self[end_pos] = piece

    piece.position = end_pos

    self[start_pos] = NullPiece.instance

  end

  def in_bounds?(pos)
    pos.all? { |idx| (0..7).cover?(idx) }
  end
end

# # Test pawns
# board = Board.setup
# board[[2,2]] = 'no'
# p board[[1,3]].moves #=> [[2, 3], [3, 3], [2, 2]]
