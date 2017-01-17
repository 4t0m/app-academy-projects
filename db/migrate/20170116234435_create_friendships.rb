class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false
      t.string :status, default: "pending"

      t.timestamps
    end

    add_index :friendships, [:user1_id, :user2_id], unique: true
  end
end
