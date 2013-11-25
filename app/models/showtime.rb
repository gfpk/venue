class Showtime < ActiveRecord::Base
  belongs_to :showitem
  has_many :tickets, :dependent => :destroy
  has_many :line_items, :through=> :tickets
  attr_accessible :date, :showtype, :time, :showitem, :price

  after_create :add_tickets

  def add_tickets
    seats=['a1','a2','a3','a4','a5','a6','a7','a8']
	seats.each do |ticket|
    	tickets.create(:seat => "#{ticket}", :price => price)
  	end
  end


end
