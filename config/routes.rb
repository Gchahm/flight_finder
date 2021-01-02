Rails.application.routes.draw do
  root 'spa#index'
  get '/*path' => 'spa#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
