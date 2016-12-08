Rails.application.routes.draw do

	resources :users, only: [:create, :new, :show]
  resource :sessions, only: [:create, :new, :destroy]
	resources :bands do
		resources :albums, only: :new
	end
	resources :albums, except: [:index, :new]
end
