class Ticket < ActiveRecord::Base
  belongs_to :showtime
  attr_accessible :price, :seat
  has_many :line_items
  #has_many :orders,:through => :line_items
  attr_accessible :price, :seat, :avaliable

  before_destroy :ensure_not_referenced_by_any_line_item

  def available
    self.line_items.empty?
  end
  def in_cart(cart)
  		cart.line_items.include? self.line_items.first
  end
	
	private
		
		def ensure_not_referenced_by_any_line_item
		if line_items.count.zero?
			
			return true
		else
			errors.add(:ticket, "must be selected" )
		return false
		end
	end

		
end
