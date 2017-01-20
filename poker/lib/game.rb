require_relative 'deck'
class Game
  attr_reader :players, :pot

  def initialize(players)
    @players = players
    @pot = 0
    @deck = Deck.new
  end

  def current_player
    @players.first
  end

  def next_player
    @players.rotate!
  end

  def increase_pot(amount)
    raise "Invalid Input" unless amount.is_a?(Numeric) && amount > 0
    @pot += amount
  end
end
