require_relative '00_tree_node'

class KnightPathFinder

  DELTAS = [[2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2]]

  def self.valid_moves(pos)
    row, col = pos
    moves = []
    DELTAS.each do |d_row, d_col|
      move = [row + d_row, col + d_col]
      moves << move if self.on_board?(move)
    end
    moves
  end

  def self.on_board(pos)
    pos.all? { |index| (0..7).cover?(index) }
  end


  def initialize
    @visited_positions = []
    build_move_tree
  end

  def new_move_positions(pos)
    all_moves = KnightPathFinder.valid_moves(pos)
    all_moves.reject { |position| @visited_positions.include?(position) }
  end

  def build_move_tree
    
  end

  def find_path
  end


end
