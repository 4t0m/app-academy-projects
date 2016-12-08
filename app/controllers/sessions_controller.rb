class SessionsController < ApplicationController
	def create
		user = User.find_by_credentials(session_params[:email], session_params[:password])
		log_in_user!(user)
		redirect_to user_url(user)
	end

	def new
		render :new
	end

	def destroy
		if current_user
			current_user.reset_session_token!
			session[:session_token] = nil
		end
		redirect_to new_sessions_url
	end


	private

  def session_params
    params.require(:user)
      .permit(:email, :password)
  end
end
