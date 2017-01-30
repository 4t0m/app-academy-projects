require_relative "card"

class Deck
  attr_reader :cards

  SUITS = [:heart, :diamond, :club, :spade].freeze

  def initialize
    @cards = populate_deck
  end

  def populate_deck
    cards = []
    (1..13).each do |value|
      SUITS.each do |suit|
        cards << Card.new(value, suit)
      end
    end

    cards
  end

  def draw(n = 1)
    raise "Invalid Input." unless n.is_a?(Integer) && n > 0
    raise "Too Few Cards!" if n > @cards.size
    @cards.shuffle!.shift(n)
  end
end
