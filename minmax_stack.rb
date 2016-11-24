class MinMaxStack
  attr_reader :min, :max

  def initialize
    @store = []
    @min = nil
    @max = nil
    @previous_mins = {}
    @previous_max = {}
  end

  def pop
    el = @store.pop
    find_old_min(el)
    find_old_max(el)

    el
  end

  def push(el)
    add_max(el)
    add_min(el)
    @store.push(el)
  end

  def peek
    @store.last
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

  private

  def add_min(el)
    if min.nil? || el < min
      @previous_mins[el] = min
      @min = el
    end
  end

  def add_max(el)
    if max.nil? || el > max
      @previous_max[el] = max
      @max = el
    end
  end

  def find_old_max(el)
    @max = @previous_max[el] if el == max
  end

  def find_old_min(el)
    @min = @previous_mins[el] if el == min
  end
end
