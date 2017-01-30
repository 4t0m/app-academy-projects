class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    credentials = [params[:user][:username], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:notices] = ["Invalid credentials."]
      @user = User.new
      render :new
    end
  end

end
