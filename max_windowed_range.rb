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
