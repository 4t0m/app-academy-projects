Rails.application.routes.draw do
	
	resources :users, only: [:create, :new, :show]
end
