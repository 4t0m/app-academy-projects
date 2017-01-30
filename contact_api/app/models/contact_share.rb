class ContactShare < ActiveRecord::Base
  belongs_to :contact
  belongs_to :user
  

  validates :contact, :user, presence: true
  validates :contact_id, uniqueness: { scope: :user_id }
end
