class Showitem < ActiveRecord::Base
	
  has_many :showtimes
  has_many :tickets , :through =>:showtimes
  attr_accessible :description, :featured, :image, :name, :showtimes_attributes
  
  accepts_nested_attributes_for :showtimes, allow_destroy: true

  before_destroy :delatable

  mount_uploader :image, ImageUploader

  def deletable_bis
  	delatable
  end
	
private
	def delatable

		for t in self.tickets
			if t.available
				return true
			end
			return false
		end

		
	end

end
