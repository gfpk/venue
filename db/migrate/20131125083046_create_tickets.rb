class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :seat
      t.integer :price
      t.references :showtime

      t.timestamps
    end
    add_index :tickets, :showtime_id
  end
end
