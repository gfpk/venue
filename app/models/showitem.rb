class Showitem < ActiveRecord::Base
	
  has_many :showtimes, :dependent => :destroy
  has_many :tickets , :through =>:showtimes
  attr_accessible :description, :featured, :image, :name, :showtimes_attributes
  accepts_nested_attributes_for :showtimes, allow_destroy: true

end
