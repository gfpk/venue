class Showtime < ActiveRecord::Base
  belongs_to :showitem
  has_many :tickets
  has_many :line_items, :through=> :tickets
  attr_accessible :date, :showtype, :time, :showitem, :price

  after_create :add_tickets
  before_destroy :delatable, :del_tickets

  def add_tickets
    seats = ("A".."S").to_a - ["I", "O"]

    seats.each_slice(2) {|row| 

      (1..22).each do |n|
        unless row[0].nil? 
            tickets.create(:seat => n.to_s + row[0], :price => price)
          end
      end

    (1..23).each do |i|
       unless row[1].nil? 
        tickets.create(:seat => i.to_s + row[1], :price => price)
       end
    end
   }


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
