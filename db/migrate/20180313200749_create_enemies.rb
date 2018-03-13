class CreateEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :enemies do |t|
      t.float :enemy_hp
      t.float :enemy_speed
      t.float :enemy_damage
      
      t.timestamps
    end
  end
end
