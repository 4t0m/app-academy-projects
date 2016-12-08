class Album < ActiveRecord::Base

	belongs_to :band, dependent: :destroy
	has_many :tracks

	def live
		self.recording_env == 'Live'
	end
end
