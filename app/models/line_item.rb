class LineItem < ActiveRecord::Base
  attr_accessible :cart, :ticket
  belongs_to :ticket
  belongs_to :cart
  belongs_to :order
  # attr_accessible :title, :body
  before_create :ensure_unique
	#...
	private
		def ensure_unique
			if self.ticket.line_items.count.zero?
		return true
		else
			errors.add(:ticket, "Oops, seems like someone was faster!" )
			return false
		end
	end
end
