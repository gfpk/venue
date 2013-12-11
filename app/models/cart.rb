class Cart < ActiveRecord::Base
  # attr_accessible :title, :body
  has_many :line_items, :dependent => :destroy

  def add_ticket(ticket_id)
    current_item = line_items.find_by_ticket_id(ticket_id)
    if current_item
      #current_item.quantity = 1
      #self.flash_notice = "Your validation as successful and you will not need to do that again"
      #errors.add_to_base("Validation code was incorrect")
    else

      current_item = line_items.build(ticket: ticket_id)
      
     
    end
    current_item
  end

  


  def total_price
    self.line_items.to_a.sum { |item| item.ticket.price }
  end
end
