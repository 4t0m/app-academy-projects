require 'rspec'
require 'card'

describe Card do
  subject { Card.new(9,:heart)}
  describe "#initialize" do
    it "initializes with a value" do
      expect(subject.value).to eq(9)
    end

    it "initializes with a suit" do
      expect(subject.suit).to eq(:heart)
    end
    context "When input is invalid" do
      it "raises an error for invalid values" do
        expect{ Card.new(99, :heart) }.to raise_error("Invalid Value")
      end

      it "raises an error for invalid suits" do
        expect{ Card.new(12, :pigeon) }.to raise_error("Invalid Suit")
      end
    end
  end


end
