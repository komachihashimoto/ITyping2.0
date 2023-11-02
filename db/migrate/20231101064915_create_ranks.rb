class CreateRanks < ActiveRecord::Migration[7.0]
  def change
    create_table :ranks do |t|
      t.string :nickname, null: false
      t.integer :score,   null: false
      t.integer :country, null: false
      t.timestamps
    end
  end
end
