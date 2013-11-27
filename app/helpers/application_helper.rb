module ApplicationHelper
	def hidden_div_if(condition, attributes = {}, &block)
    if condition
        attributes["style"] = "display: none"
        end
    content_tag("div", attributes, &block)
    end

     def resource_name
    :user
  end
 
  def resource
    @resource ||= User.new
  end
 
  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end
