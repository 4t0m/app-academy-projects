
require_relative "minmax_stack"

class MinMaxStackQueue

  def initialize
    @store = MinMaxStack.new
    @hold_store = MinMaxStack.new
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

  def min
    @store.min
  end

  def max
    @store.max
  end


end
