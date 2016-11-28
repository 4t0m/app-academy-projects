require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if count == num_buckets
    @store[self[key]] << key
    @count += 1
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
    old_store = @store
    @count = 0
    @store = Array.new(num_buckets * 2) { Array.new }

    old_store.flatten.each { |key| insert(key) }
  end
end
