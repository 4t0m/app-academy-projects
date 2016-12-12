require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryGirl.build(:user,
      username: "adom",
      password: "my_password")
  end

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least


  describe "password encryption" do
  it "does not save passwords to the database" do
    User.create!(username: "4t0m", password: "123456")
    user = User.find_by_username("4t0m")
    expect(user.password).not_to be("123456")
  end

  it "encrypts the password using BCrypt" do
    expect(BCrypt::Password).to receive(:create)
    User.new(username: "4t0m", password: "123456")
  end

end
