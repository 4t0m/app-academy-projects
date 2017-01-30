class Card

  SUITS = [:heart, :diamond, :club, :spade]

  attr_reader :value, :suit
  def initialize(value, suit)
    raise "Invalid Value" unless value.between?(1,13)
    raise "Invalid Suit" unless SUITS.include?(suit)

    @value = value
    @suit = suit
  end

end
