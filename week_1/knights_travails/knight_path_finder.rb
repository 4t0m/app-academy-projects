require_relative '00_tree_node'

class KnightPathFinder

  attr_reader :visited_positions

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

  def self.on_board?(pos)
    pos.all? { |index| (0..7).cover?(index) }
  end


  def initialize(pos)
    @start_node = PolyTreeNode.new(pos)
    @visited_positions = [pos]
    @move_tree = build_move_tree
  end

  def new_move_positions(pos)
    all_moves = KnightPathFinder.valid_moves(pos)
    all_moves.reject { |position| @visited_positions.include?(position) }
  end

  def build_move_tree
    queue = [@start_node]

    until queue.empty?
      current_node = queue.shift
      next_positions = new_move_positions(current_node.pos)
      next_positions.each do |next_pos|
        next if @visited_positions.include?(next_pos)
        child_node = create_child(next_pos, current_node)
        @visited_positions << next_pos
        queue << child_node
      end
    end
  end

  def create_child(pos, current_node)
    child_node = PolyTreeNode.new(pos)
    child_node.parent = current_node
    child_node
  end

  def find_path(pos)
    target_node = @start_node.dfs(pos)
    trace_path_back(target_node)
  end

  def trace_path_back(end_node)
    path = []
    current_node = end_node

    until current_node.parent.nil?
      path << current_node.pos
      current_node = current_node.parent
    end

    path << current_node.pos
    path.reverse
  end

end
