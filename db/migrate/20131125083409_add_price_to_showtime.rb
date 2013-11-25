class AddPriceToShowtime < ActiveRecord::Migration
  def change
    add_column :showtimes, :price, :integer
  end
end
