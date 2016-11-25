class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    fixnum = to_fixnum
    fixnum.hash
  end

  private

  def to_fixnum
    size = self.size
    self.each_with_index do |el, index|
      size = size + el * index
    end

    size
  end

end

class String
  def hash
    fixnum = to_fixnum
    fixnum.hash
  end

  def to_fixnum
    sum = 0
    self.chars.each_with_index do |char, index|
      sum += char.ord * index
    end

    sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    fixnum = to_fixnum
    fixnum.hash
  end

  def to_fixnum
    arr = []
    self.each do |k, v|
      arr << [k, v]
    end

    arr.sort!
    hash = 0
    arr.each do |k, v|
      k_fix = k.is_a?(Fixnum) ? k : k.inspect.to_fixnum
      v_fix = v.is_a?(Fixnum) ? v : v.inspect.to_fixnum

      hash = hash + k_fix + v_fix
    end
    hash

  end



end
