# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date
#  color       :string
#  name        :string           not null
#  sex         :string(1)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Cat < ActiveRecord::Base

  validates :color, :name, presence: true
  validates :name, uniqueness: true
  validate :valid_sex


  def age
    (Time.now.year * 12 + Time.now.month) -
      (birth_date.year * 12 + birth_date.month) / 12
  end

  private

  def valid_sex
    unless sex == "M" || sex == "F"
      errors[:sex] << "must be 'M' or 'F' "
    end
  end
end
