Rails.application.routes.draw do

	resources :users, only: [:create, :new, :show]
  resource :sessions, only: [:create, :new, :destroy]

	resources :bands do
		resources :albums, only: :new
	end

	resources :albums, except: [:index, :new] do
		resources :tracks, only: :new
	end

	resources :tracks, except: [:index, :new] do
		resources :notes, only: :new
	end

	resources :notes, only: [:create, :destroy]


end
