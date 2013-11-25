class Showtime < ActiveRecord::Base
  belongs_to :showitem
  attr_accessible :date, :showtype, :time, :showitem
end
