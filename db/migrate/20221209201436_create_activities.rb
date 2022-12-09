class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.string :comment
      t.integer :user_id
      t.integer :camp_id

      t.timestamps
    end
  end
end
