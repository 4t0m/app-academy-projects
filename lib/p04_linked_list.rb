require "byebug"

class Link
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @next.prev = @prev unless @next.nil?
    @prev.next = @next unless @prev.nil?
  end

end

class LinkedList
  include Enumerable
  def initialize
    @head = nil
    @tail = nil
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head
  end

  def last
    @tail
  end

  def empty?
    @head.nil?
  end

  def get(key)
    each { |link| return link.val if link.key == key }
    nil
  end

  def include?(key)
    each { |link| return true if link.key == key }
    false
  end

  def append(key, val)
    new_last = Link.new(key, val)
    if last.nil?
      @head = new_last
    else
      @tail.next = new_last
      new_last.prev = last
    end
    @tail = new_last
  end

  def update(key, val)
    each { |link| link.val = val if link.key == key }
  end

  def remove(key)
    each do |link|
      next unless link.key == key
      if link == @head && @head.next.nil?
        @head, @tail = nil, nil
      elsif link == @head
        @head = @head.next
        @head.prev = nil
      elsif link == @tail
        @tail = @tail.prev
        @tail.next = nil
      else
        link.remove
      end
    end
  end

  def each(&prc)
    current_link = first
    until current_link.nil?
      prc.call(current_link)
      current_link = current_link.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
