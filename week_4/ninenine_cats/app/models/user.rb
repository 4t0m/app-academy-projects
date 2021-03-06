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

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(128)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(128)
    self.save!
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password
    @password
  end

  def is_password?(password)
    bc_obj = BCrypt::Password.new(password_digest)
    bc_obj.is_password?(password)
  end

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
end
