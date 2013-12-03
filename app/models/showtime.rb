class Showtime < ActiveRecord::Base
  belongs_to :showitem
  has_many :tickets
  has_many :line_items, :through=> :tickets
  attr_accessible :date, :showtype, :time, :showitem, :price

  after_create :add_tickets
  before_destroy :delatable, :del_tickets

  def add_tickets
    seats=['a1','a2','a3','a4','a5','a6','a7','a8']
	seats.each do |ticket|
    	tickets.create(:seat => "#{ticket}", :price => price)
  	end
  end

 def deletable_bis
    delatable
  end
  def soldout
    if self.tickets.all? {|t| t.available == false}
      return true
    end
  end

private
  def delatable
     self.tickets.all? {|t| t.available}
  end

  def del_tickets
    for t in self.tickets
      if t.destroy
    end
  end
end

end
