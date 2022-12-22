class CreateCamps < ActiveRecord::Migration[6.1]
  def change
    create_table :camps do |t|
      t.string :name
      t.string :description
      t.string :main_activity
      t.string :image
      t.timestamps
    end
  end
end
