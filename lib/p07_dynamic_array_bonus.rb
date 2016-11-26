class StaticArray
  def initialize(capacity)
    @store = Array.new(capacity)
  end

  def [](i)
    validate!(i)
    @store[i]
  end

  def []=(i, val)
    validate!(i)
    @store[i] = val
  end

  def length
    @store.length
  end

  private

  def validate!(i)
    raise "Overflow error" unless i.between?(0, @store.length - 1)
  end
end

class DynamicArray
  attr_reader :count

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @count = 0
  end

  def [](i)

    @store[i]
  rescue "Overflow error"
    nil

  end

  def []=(i, val)

  end

  def capacity
    @store.length
  end

  def include?(val)
  end

  def push(val)
    i = 0
    until i == capacity - 1
      if @store[i].nil?
        return @store[i] = val
      else
        i += 1
      end
    end
  end

  def unshift(val)
    new_array = StaticArray.new(capacity)
    i = 0
    until i == capacity - 2
      new_array[i + 1] = @store[i]
      i += 1
    end

    new_array[0] = val
    p new_array
    @store = new_array
  end

  def pop
    popped_val = last
    @store[capacity] = nil

    return popped_val
  end

  def shift
  end

  def first
    @store[0]
  end

  def last
    @store[capacity]
  end

  def each(&prc)
    i = 0

    until i + 1 == capacity
      prc.call(@store[i])
      i += 1
    end
  end

  def to_s
    "[" + inject([]) { |acc, el| acc << el }.join(", ") + "]"
  end

  def ==(other)
    return false unless [Array, DynamicArray].include?(other.class)
    # ...
  end

  alias_method :<<, :push
  [:length, :size].each { |method| alias_method method, :count }

  private

  def resize!

  end
end
