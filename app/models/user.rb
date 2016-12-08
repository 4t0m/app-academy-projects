class User < ActiveRecord::Base

	validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

	after_initialize :ensure_session_token

	attr_reader :password

  def self.generate_session_token
		SecureRandom.base64(128)
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
	end

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def is_password?(password)
		bcrypt_obj = BCrypt.new(password_digest)
		bcrypt_obj.is_password?(password)
	end
end
