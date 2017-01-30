class AddProfileColumnsToUser < ActiveRecord::Migration
  def change
    add_column :users, :gender, :string
    add_column :users, :home_town, :string
    add_column :users, :relationship, :string
    add_column :users, :workplace, :string
    add_column :users, :cover_pic_url, :string
    add_column :users, :birthday, :date
  end
end
