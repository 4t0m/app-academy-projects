require_relative 'my_stack'

class StackQueue

  def initialize
    @store = MyStack.new
    @hold_store = MyStack.new
  end

  def enqueue(el)
    @store.size.times do
      @hold_store.push(@store.pop)
    end

    @store.push(el)

    @hold_store.size.times do
      @store.push(@hold_store.pop)
    end
    el
  end

  def dequeue
    @store.pop
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

end
