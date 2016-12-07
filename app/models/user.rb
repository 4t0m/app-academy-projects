# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :user_name, :password_digest, uniqueness: true, presence: true
  after_initialize :ensure_session_token

  def ensure_session_token!
    @session_token ||= SecureRandom.base64(128)
  end

  def reset_session_token!
    @session_token = SecureRandom.base64(128)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password
    @password
  end
end
