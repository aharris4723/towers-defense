class CreateWaves < ActiveRecord::Migration[5.1]
  def change
    create_table :waves do |t|
      t.integer :start_money
      t.integer :num_enemies
      t.integer :money_user, :default => 0

      t.timestamps
    end
  end
end
