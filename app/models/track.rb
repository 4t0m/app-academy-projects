class Track < ActiveRecord::Base

  belongs_to :album

  def bonus
    self.track_type == "Bonus"
  end
end
