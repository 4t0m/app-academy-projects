class Contact < ActiveRecord::Base

  belongs_to :owner, class_name: "User", primary_key: :id, foreign_key: :user_id
  has_many :contact_shares
  has_many :shared_users, through: :contact_shares, source: :user

  validates :name, :email, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :email }

end
