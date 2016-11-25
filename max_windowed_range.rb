require_relative 'minmaxstackqueue'
require 'benchmark'

def max_windowed_range(array, window_size)
  max_range = nil
  (0..(array.size - window_size)).each do |start_idx|
    window = array.slice(start_idx, window_size)
    min, max = window.minmax
    current_range = max - min
    if max_range.nil? || current_range > max_range
      max_range = current_range
    end
  end

  max_range
end

def fancy_windowed_range(array, window_size)
  window = MinMaxStackQueue.new
  window_size.times { |i| window.enqueue(array[i]) }
  max_range = window.max - window.min
  (window_size...array.length).each do |index|
    window.dequeue
    window.enqueue(array[index])
    new_range = window.max - window.min
    max_range = new_range if new_range > max_range
  end
  max_range
end
