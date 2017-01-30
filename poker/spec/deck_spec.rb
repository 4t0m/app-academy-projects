require "deck"
require "rspec"

describe Deck do

  subject { Deck.new }
  let (:deck) { subject.cards }

  describe "#initialize" do

    it "creates an array variable 'cards' " do
      expect(subject.cards).to be_an Array
    end
  end


  describe "#populate_deck" do
    it "returns a deck with 52 cards" do
      expect(deck.size).to eq(52)
    end

    it "populates the deck with Card objects" do
      expect(deck.all? { |el| el.is_a?(Card) } ).to be true
    end

    it "creates Cards with correct values" do
      deck_values = deck.map { |card| card.value }
      test_values = (1...14).to_a * 4
      expect(deck_values).to match_array(test_values)
    end

    it "creates Cards with correct suits" do
      deck_suits = deck.map { |card| card.suit }
      test_suits = [:heart, :diamond, :club, :spade] * 13
      expect(deck_suits).to match_array(test_suits)
    end
  end

  describe "#draw" do
    it "removes a card from the deck" do
      subject.draw
      expect(deck.size).to eq(51)
    end

    it "removes multiple cards from the deck" do
      subject.draw(5)
      expect(subject.cards.size).to eq(47)
    end

    it "returns an array" do
      expect(subject.draw).to be_an Array
    end

    it "returns an array of length one by default" do
      expect(subject.draw.size).to eq(1)
    end

    it "returns an array of multiple elements" do
      expect(subject.draw(5).size).to eq(5)
    end

    it "returns an array of Card objects" do
      expect(subject.draw(5).all? { |el| el.is_a?(Card) }).to be true
    end

    it "throws an error if insufficient cards remain" do
      expect { subject.draw(53) }.to raise_error "Too Few Cards!"
    end

    it "throws an error unless argument is natural number" do
      expect { subject.draw(-2) }.to raise_error "Invalid Input."
      expect { subject.draw(5.4) }.to raise_error "Invalid Input."
      expect { subject.draw("1") }.to raise_error "Invalid Input."
    end

  end
end
