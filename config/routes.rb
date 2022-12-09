Rails.application.routes.draw do
    resources :camps, only: [:index]
 
end
