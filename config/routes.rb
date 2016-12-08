Rails.application.routes.draw do
	
	resources :users, only: [:create, :new, :show]
  resource :sessions, only: [:create, :new, :destroy]
end
