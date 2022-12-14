Rails.application.routes.draw do
    resources :camps, only: [:index]
    resources :users, only: [:create, :show]
    resources :comments, only: [:create, :show, :update, :destroy]
end
