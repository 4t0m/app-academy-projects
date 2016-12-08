class Track < ActiveRecord::Base

  belongs_to :album, dependent: :destroy
end
