class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :get_cart , :except => :cart
  
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.root_url, :alert => exception.message
  end

  


  private
	def current_cart
		Cart.find(session[:cart_id])
	rescue ActiveRecord::RecordNotFound
		cart = Cart.create
		session[:cart_id] = cart.id
		cart
  	end

  protected

	def get_cart
	    @cart = current_cart
	    
	end
end
