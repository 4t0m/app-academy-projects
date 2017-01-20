class ChangeNoteColumntoContent < ActiveRecord::Migration
  def change
    rename_column :notes, :user_note, :content
  end
end
