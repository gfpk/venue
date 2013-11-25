class Ticket < ActiveRecord::Base
  belongs_to :showtime
  attr_accessible :price, :seat
end
