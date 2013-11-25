class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.references :ticket
      t.references :cart

      t.timestamps
    end
    add_index :line_items, :ticket_id
    add_index :line_items, :cart_id
  end
end
