require 'set'

class Game

  def initialize (*players)
    @players = players
    @current_player = @players.first
    @fragment = ""
    @dictionary = create_dict

    @losses = {}
    @players.each do | player |
      @losses[player] = 0
    end
  end

  def create_dict
    dictionary = Set.new
    File.open("dictionary.txt", "r") do |file|
      file.each_line do |word|
        dictionary << word.chomp
      end
    end

    dictionary
  end

  def run
    until @players.size == 1
      display_standings
      take_turn(@current_player)
    end

    puts "Yay! Winner! #{@current_player.name} is the best!"
  end

  def next_player!
    @players.rotate!
    @current_player = @players.first
  end

  def take_turn(player)
    guess = nil
    until guess
      puts "Current string is: '#{@fragment}'"
      guess = player.guess
      if valid_play?(guess)
        @fragment << guess
        penalty if @dictionary.none? do | word |
          test_string = "#{@fragment}"
          word[0...test_string.length] == test_string
        end

        penalty if @dictionary.any? do | word |
          test_string = "#{@fragment}"
          word == test_string
        end
      else
        @current_player.alert_invalid_guess
        guess = nil
      end
    end

    next_player!
    @players.pop if @losses[@players.last] == 5

  end

  def valid_play?(string)
    ("a".."z").include?(string)
  end

  def penalty
    @losses[@current_player] += 1
    @fragment = ""
  end

  def record(player)
    score = @losses[player]
    "GHOST"[0...score]
  end

  def display_standings
    @players.each do | player |
      puts "#{player.name}: #{record(player)}"
    end
    puts "Current player: #{@current_player.name}"
  end

end

class Player
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def guess
    puts "Gimme a letter!"
    gets.chomp
  end

  def alert_invalid_guess
    puts "That's an invalid guess, please try again."
    guess
  end


end


player_1 = Player.new("bob")
player_2 = Player.new("alice")
player_3 = Player.new("other")
game = Game.new(player_1, player_2, player_3)
game.run
