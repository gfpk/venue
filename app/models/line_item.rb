class LineItem < ActiveRecord::Base
  attr_accessible :cart, :ticket
  belongs_to :ticket
  belongs_to :cart
  # attr_accessible :title, :body
end
