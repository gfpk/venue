class CreateShowtimes < ActiveRecord::Migration
  def change
    create_table :showtimes do |t|
      t.date :date
      t.time :time
      t.string :showtype
      t.references :showitem

      t.timestamps
    end
    add_index :showtimes, :showitem_id
  end
end
