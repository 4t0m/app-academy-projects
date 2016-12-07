class SessionsController < ApplicationController

  def new
    @session = Session.new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user_name], params[:password])
    if user
      user.reset_session_token!
      session[:session_token] = user.session_token
      redirect_to cats_url
    else
      render :new
    end
  end
end
