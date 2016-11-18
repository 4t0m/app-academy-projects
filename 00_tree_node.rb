class PolyTreeNode
  attr_reader :parent, :children, :value

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(parent_node)
    parent.children.delete(self) unless parent.nil?

    @parent = parent_node
    parent_node.children << self unless parent_node.nil?
  end

  def add_child(child_node)
    child_node.parent = self
  end

  def remove_child(child_node)
    raise "Given node is not a valid child." unless child_node.parent == self
    child_node.parent = nil
  end

  def dfs(target_value)
    return self if value == target_value

    @children.each do |child|
      child_dfs = child.dfs(target_value)
      return child_dfs unless child_dfs.nil?
    end

    nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?
      current_node = queue.shift
      return current_node if current_node.value == target_value
      queue += current_node.children
    end
  end
end
