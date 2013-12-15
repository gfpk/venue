class Cart < ActiveRecord::Base
  # attr_accessible :title, :body
  has_many :line_items, :dependent => :destroy

  def add_ticket(ticket_id)
    

      current_item = line_items.build(ticket: ticket_id)
      
     
    
    current_item
  end

  def cart_cleanup
    
        if Time.now > self.updated_at + (1*60)
          self.destroy
        end
    
  end


  def total_price
    self.line_items.to_a.sum { |item| item.ticket.price }
  end
end
