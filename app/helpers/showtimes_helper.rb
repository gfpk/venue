module ShowtimesHelper

	def book_bar(v)
		total = v.tickets.count.to_f
		booked = v.line_items.count.to_f
		#booked = total - avail
		perc = booked/total*100
 		return perc.to_i
	end
	
end
