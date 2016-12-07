Rails.application.routes.draw do

  resources :cats

  resources :cat_rental_requests do
    post 'approve', on: :member
    post 'deny', on: :member
  end

  resources :cat_rental_requests, only: [:new, :create, :index, :show]

end
