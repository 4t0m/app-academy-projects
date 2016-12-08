class Track < ActiveRecord::Base

  belongs_to :album
  has_many :notes, dependent: :destroy

  def bonus
    self.track_type == "Bonus"
  end
end
