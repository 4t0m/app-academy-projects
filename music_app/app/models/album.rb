class Album < ActiveRecord::Base

	belongs_to :band
	has_many :tracks, dependent: :destroy

	def live
		self.recording_env == 'Live'
	end
end
