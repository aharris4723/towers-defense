Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'devise/sessions'
  }
  
  devise_scope :user do
    authenticated :user do
      root 'game#index', as: :authenticated_root
    end

    resources :users
    resources :game
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end

    resources :comments
    
  end
end
