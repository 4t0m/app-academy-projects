module ApplicationHelper
  def auth_token
    "<input
    type=\"hidden\"
    name=\"authenticity_token\"
    value='#{form_authenticity_token}'>".html_safe
  end

  def show_errors
    error_string = "<ul>"
    unless flash[:errors].nil?
      flash[:errors].each do |error|
        error_string << "<li>#{error}</li>"
      end
    end
    error_string << "</ul>"

    error_string.html_safe
  end

end
