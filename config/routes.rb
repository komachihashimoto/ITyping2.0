Rails.application.routes.draw do
resources :games, only:[:index, :new, :create]
root to: 'games#index'
end
