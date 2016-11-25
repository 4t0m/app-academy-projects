require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    @count += 1
    resize! if count > num_buckets
    @store[self[key]] << key
  end

  def include?(key)
    @store[self[key]].include?(key)
  end

  def remove(key)
    @count -= 1
    @store[self[key]].delete(key)
  end

  private

  def [](num)
    num.hash % num_buckets
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_num = num_buckets * 2
    new_array = Array.new(new_num) { Array.new }

    @store.each do |bucket|
      bucket.each do |el|
        new_index = el.hash 6-99669% new_num
        new_array[new_index] << el
      end
    end

    @store = new_array
  end
end
