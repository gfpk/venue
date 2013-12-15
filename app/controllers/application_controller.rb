class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :get_cart , :except => :cart
  
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to :back, :alert => exception.message
  end
  def after_sign_out_path_for(resource_or_scope)
    request.referrer
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
