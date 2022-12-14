Rails.application.routes.draw do
    resources :camps, only: [:index]
    resources :users, only: [:index, :create, :show]
    resources :comments, only: [:create, :show, :update, :destroy]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end
