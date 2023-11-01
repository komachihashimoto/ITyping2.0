Rails.application.routes.draw do
resources :games, only:[:index, :new, :create, :show]
root to: 'games#index'
end
