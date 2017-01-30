class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name, null: false, unique: true

      t.timestamps
    end

    add_index :users, :user_name
  end
end
