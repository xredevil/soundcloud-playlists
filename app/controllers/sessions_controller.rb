class SessionsController < ApplicationController
  
  # Get access token and find or create a new user.
  def new
    access_token = Soundcloud.new(
      client_id: SOUNDCLOUD[:client_id],
      client_secret: SOUNDCLOUD[:client_secret],
      redirect_uri:  SOUNDCLOUD[:client_callback]
    ).exchange_token(code: params[:code])
    
    client = Soundcloud.new(
      access_token: access_token.access_token
    )
    
    user = User.find_or_create(client.get('/me').id, access_token.access_token)
    session[:user_id] = user.id
  end
end
