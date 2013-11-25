class CreateShowitems < ActiveRecord::Migration
  def change
    create_table :showitems do |t|
      t.string :name
      t.string :image
      t.boolean :featured
      t.text :description

      t.timestamps
    end
  end
end
