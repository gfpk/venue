module ApplicationHelper
	def hidden_div_if(condition, attributes = {}, &block)
    if condition
        attributes["style"] = "display: none"
        end
    content_tag("div", attributes, &block)
  end

  def link_to_remove_fields(name, f)
    f.hidden_field(:_destroy) + link_to_function(name, "remove_fields(this)")
  end
  
  def link_to_add_fields(name, f, association)
    new_object = f.object.send(association).klass.new
    id = new_object.object_id
    fields = f.fields_for(association, new_object, child_index: id) do |f|
      render(association.to_s.singularize + "_fields", f: f)
    end
    link_to(name, '#', class: "add_fields", data: {id: id, fields: fields.gsub("\n", "")})
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

def flash_display
  response = ""
  flash.each do |name, msg|
    response = response + content_tag(:div, msg, :id => "flash_#{name}")
  end
  flash.discard
  response
end