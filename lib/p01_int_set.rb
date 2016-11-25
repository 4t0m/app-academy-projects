class MaxIntSet

  attr_reader :store, :max

  def initialize(max)
    @max = max
    @store = Array.new(max) { false }
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    store[num] = true
  end

  def remove(num)
    raise "Out of bounds" unless is_valid?(num)
    store[num] = false

  end

  def include?(num)
    raise "Out of bounds" unless is_valid?(num)
    store[num]
  end

  private

  def is_valid?(num)
    num > 0 && num < max
  end

  def validate!(num)
  end
end

class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[self[num]] << num
  end

  def remove(num)
    @store[self[num]].delete(num)
  end

  def include?(num)
    @store[self[num]].include?(num)
  end

  private

  def [](num)
    num % num_buckets
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    @count += 1
    resize! if num_buckets < count
    @store[self[num]] << num
  end

  def remove(num)
    @count -= 1
    @store[self[num]].delete(num)
  end

  def include?(num)
    @store[self[num]].include?(num)
  end


  private

  def [](num)
    num % num_buckets
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_size = num_buckets * 2
    new_store = Array.new(new_size) { Array.new }

    @store.each do |bucket|
      bucket.each do |el|
        new_bucket_index = el % new_size
        new_store[new_bucket_index] << el
      end
    end

    @store = new_store
  end
end
