Rails.application.routes.draw do
  resources :urls
  resource :users
  get '/about', to: 'pages#about'

  # app.get('/urls', () => {
    # 
  # })
end
