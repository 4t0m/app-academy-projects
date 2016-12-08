class Album < ActiveRecord::Base

	belongs_to :band, dependent: :destroy

	def live
		self.recording_env == 'Live'
	end
end
