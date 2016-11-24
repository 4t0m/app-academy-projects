require_relative "deck"

class Hand
  attr_reader :cards

  def initialize
    @cards = []
  end

  def populate_hand(deck)
    @cards = deck.draw(5)
  end

  def flush_hand?(arr)
    arr.all? { |card| card.suit == arr.first.suit }
  end

  def straight_hand?(arr)
    sorted = arr.map(&:value).sort
    sorted.each_with_index do |el, idx|
      return false unless sorted.first + idx == el
    end

    true
  end


end
