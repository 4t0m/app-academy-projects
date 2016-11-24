require "hand"
require "rspec"
require "card"

describe Hand do
  let (:deck) { double }
  let (:card) { double("card")}
  subject { Hand.new(deck) }

  before(:each) do
    allow(card).to receive(:is_a?).and_return(Card)
    allow(deck).to receive(:draw).with(5).and_return([card] * 5)
  end

  describe "#initialize" do
    it "creates an empty hand" do
      expect(subject.cards).to be_an Array
    end
  end

  describe "#populate_hand" do
    let (:cards) { subject.populate_hand }
    it "fills the hand with 5 cards" do
      expect(cards.size).to eq(5)
    end

    it "fills the hand with Card objects" do
      expect(cards.all? { |card| card.is_a?(Card) }).to be true
    end
  end

  let (:flush_hand) do [ Card.new(1, :club),
                         Card.new(2, :club),
                         Card.new(9, :club),
                         Card.new(4, :club),
                         Card.new(5, :club) ]

  end

  let (:straight_hand) do [ Card.new(1, :club),
                            Card.new(2, :diamond),
                            Card.new(3, :spade),
                            Card.new(4, :heart),
                            Card.new(5, :club) ]

  end

  let (:triple_hand) do [Card.new(1, :club),
                         Card.new(2, :diamond),
                         Card.new(3, :spade),
                         Card.new(2, :heart),
                         Card.new(2, :club) ]
  end


  describe "#flush_hand?" do
    it "returns true for a flush hand" do
      expect(subject.flush_hand?(flush_hand)).to be(true)
    end

    it "returns false for a non flush hand" do
      expect(subject.flush_hand?(straight_hand)).to be(false)
    end
  end

  describe "#straight_hand?" do
    it "returns true for a straight hand" do
      expect(subject.straight_hand?(straight_hand)).to be(true)
    end

    it "returns false for a non straight hand" do
      expect(subject.straight_hand?(flush_hand)).to be(false)
    end
  end

end
