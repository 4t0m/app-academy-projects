class EnforceUniquenessonBandNames < ActiveRecord::Migration
  def change
    remove_index :bands, :name
    add_index :bands, :name, unique: true
  end
end
