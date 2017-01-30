
require_relative "minmax_stack"

class MinMaxStackQueue

  def initialize
    @in_stack = MinMaxStack.new
    @out_stack = MinMaxStack.new
  end

  def enqueue(el)
    @in_stack << el
  end

  def dequeue
    queueify if @out_stack.empty?
    @out_stack.pop
  end

  def size
    @in_stack.size + @out_stack.size
  end

  def empty?
    @in_stack.empty? && @out_stack.empty?
  end

  def max
    in_max = @in_stack.max unless @in_stack.empty?
    out_max = @out_stack.max unless @out_stack.empty?
    [in_max, out_max].max
  end

  def min
    in_min = @in_stack.min unless @in_stack.empty?
    out_min = @out_stack.min unless @out_stuck.empty?
    [in_min, out_min].min
  end

  private

  def queueify
    until @in_stack.empty?
      @out_stack << @in_stack.pop
    end
  end

end
