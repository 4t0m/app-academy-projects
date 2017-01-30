require_relative "my_stack"

class MinMaxStack

  def initialize
    @store = MyStack.new
  end

  def pop
    @store.pop[:value] unless empty?
  end

  def push(el)
    @store.push({
      max: new_max(el),
      min: new_min(el),
      value: el
      })
  end

  def peek
    @store.peek[:value] unless empty?
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

  def min
    @store.peek[:min] unless empty?
  end

  def max
    @store.peek[:max] unless empty?
  end

  private

  def new_max(el)
    empty? ? el : [max, el].max
  end

  def new_min(el)
    empty? ? el : [min, el].min
  end
end
