Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'flights/search'
    end
  end
  root 'spa#index'
  get '/*path' => 'spa#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
