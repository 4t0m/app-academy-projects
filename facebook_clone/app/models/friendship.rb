# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  status     :string           default("pending")
#  created_at :datetime
#  updated_at :datetime
#

class Friendship < ActiveRecord::Base
end
