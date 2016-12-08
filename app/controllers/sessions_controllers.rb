class SessionsController < ApplicationController

	def create
		current_user.reset_session_token!
		session[:session_token] = current_user.session_token
		redirect_to user_url(current_user)
	end

	def new
		render :new
	end

	def destroy
		session[:session_token] = nil
		redirect_to new_sessions_url
	end
end
