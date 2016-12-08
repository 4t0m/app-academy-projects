class Album < ActiveRecord::Base

	belongs_to :band, dependent: :destroy
end
