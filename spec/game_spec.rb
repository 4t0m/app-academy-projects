require "rspec"
require "game"

describe Game do
  let (:bob) { double("bob") }
  let (:alice) { double("alice") }
  subject { Game.new([bob,alice]) }

  describe "#initialize" do
    it "stores array of players" do
      expect(Game.new([bob, alice]).players).to be_an Array
    end

    it "sets an initial player" do
      expect(subject.current_player).to eq(bob)
    end

    it "sets pot to zero" do
      expect(subject.pot).to eq(0)
    end
  end

  describe "#next_player" do
    it "changes the current player" do
      subject.next_player
      expect(subject.current_player).to eq(alice)
    end
  end

  describe "#increase_pot" do
    it "increases the amount in the pot" do
      subject.increase_pot(50)
      expect(subject.pot).to eq(50)
    end

    it "raises an error for non-positive-numbers" do
      expect { subject.increase_pot("1") }.to raise_error "Invalid Input"
      expect { subject.increase_pot(-40) }.to raise_error "Invalid Input"
    end
  end


end
