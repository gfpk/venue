class Showtime < ActiveRecord::Base
  belongs_to :showitem
  has_many :tickets
  has_many :line_items, :through=> :tickets
  attr_accessible :date, :showtype, :time, :showitem, :price

  after_create :add_tickets
  before_destroy :delatable

  def add_tickets
    seats=['a1','a2','a3','a4','a5','a6','a7','a8']
	seats.each do |ticket|
    	tickets.create(:seat => "#{ticket}", :price => price)
  	end
  end

 def deletable_bis
    delatable
  end

private
  def delatable

    for t in self.tickets
      if t.available
        return true
      end
      return false
    end

    
  end

end
