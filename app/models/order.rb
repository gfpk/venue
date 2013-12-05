class Order < ActiveRecord::Base
  PAYMENT_TYPES = [ "Check" , "Credit card" , "Purchase order" ]
  belongs_to :user
  attr_accessible :email, :name, :user
  has_many :line_items, :dependent => :destroy
  validates :name, :email, :presence => true

	def add_line_items_from_cart(cart)
		cart.line_items.each do |item|
			item.cart_id = nil
			line_items << item
		end
	end

end
