# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING")
#  created_at :datetime
#  updated_at :datetime
#

class CatRentalRequest < ActiveRecord::Base

  validates :cat_id, :start_date, :end_date, :status, presence: true
  validate :status_string, :overlapping_approved_requests

  belongs_to :cat, dependent: :destroy

  def approve!
    CatRentalRequest.transaction do
      self.status = "APPROVED"
      self.save!
      overlapping_pending_requests.each(&:deny!)
    end
  end

  def deny!
    self.status = "DENIED"
    self.save!
  end

  def pending?
    self.status == "PENDING"
  end

  private

  def status_string
    unless ["PENDING", "APPROVED", "DENIED"].include?(status)
      errors[:status] << "must be 'PENDING', 'APPROVED', or 'DENIED' "
    end
  end

  def overlapping_requests
    sibling_requests = cat.cat_rental_requests
    sibling_requests
      .where("id != ?", id)
      .where('start_date BETWEEN ? AND ? OR end_date BETWEEN ? AND ?',
             start_date, end_date, start_date, end_date)

  end

  def overlapping_approved_requests
    unless overlapping_requests.where(status: "APPROVED").count == 0
      errors[:base] << "Start date or end date overlaps with another request"
    end
  end

  def overlapping_pending_requests
    overlapping_requests.where(status: "PENDING")
  end

end
