Rails.application.routes.draw do
  root 'appointments/index', controller: 'appointments', action: 'index'

  resources :appointments, only: [:index, :create]
end
