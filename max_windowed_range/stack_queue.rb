require_relative 'my_stack'

class StackQueue

  def initialize
    @in_stack = MyStack.new
    @out_stack = MyStack.new
  end

  def enqueue(el)
    @in_stack << el
  end

  def dequeue
    queueify if @out_stack.empty?
    @out_stack.pop
  end

  def size
    @store.size
  end

  def empty?
    @in_stack.empty? && @out_stack.empty?
  end

  private

  def queueify
    until @in_stack.empty?
      @out_stack << @in_stack.pop
    end
  end

end
