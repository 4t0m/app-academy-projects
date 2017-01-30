# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_pic_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string
#  home_town       :string
#  relationship    :string
#  workplace       :string
#  cover_pic_url   :string
#  birthday        :date
#  school          :string
#  current_city    :string


class User < ActiveRecord::Base

  attr_reader :password

  validates :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_attached_file :profile_pic, default_url: "missing.png"
  # validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_pic, default_url: "no-cover.png"
  # validates_attachment_content_type :cover_pic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    bcrypt_obj = BCrypt::Password.new(self.password_digest)
    bcrypt_obj.is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

end
