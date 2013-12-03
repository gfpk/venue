class Showitem < ActiveRecord::Base
	
  has_many :showtimes
  has_many :tickets , :through =>:showtimes
  attr_accessible :description, :featured, :image, :name, :showtimes_attributes
  
  accepts_nested_attributes_for :showtimes, allow_destroy: true

  before_destroy :delatable, :del_showtimes

  mount_uploader :image, ImageUploader

  def deletable_bis
  	delatable
  end
  def soldout
  	self.tickets.all? {|t| t.available != false}
  end
	
private
	def delatable
	   self.tickets.all? {|t| t.available}
	end

	def del_showtimes

		for tim in self.showtimes
			
			tim.destroy
		end	
	end

end
