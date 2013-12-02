class Showitem < ActiveRecord::Base
	
  has_many :showtimes
  has_many :tickets , :through =>:showtimes
  attr_accessible :description, :featured, :image, :name, :showtimes_attributes
  
  accepts_nested_attributes_for :showtimes, allow_destroy: true

  before_destroy :ensure_not_have_showtime

  mount_uploader :image, ImageUploader

  
	

	def ensure_not_have_showtime
		for t in self.tickets
			if t.available
				return true
			elsif self.showtimes.empty?
				return true
			else
				return false
		end
	end
end

end
