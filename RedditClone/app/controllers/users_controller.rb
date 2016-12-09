class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:session_token] = @user.session_token
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ["Invalid form input"]
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
