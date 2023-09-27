class UrlsController < ApplicationController
  def index
    @urls = Url.all
    render json: @urls
  end

  def new

  end

  def create 
    puts "----------------"
    puts params[:url]
    # byebug
    url = Url.new( url_params)
    url.shortURL = SecureRandom.base64(10)
    url.save
    redirect_to '/urls'
  end

  private 
  def url_params
    params.require(:url).permit(:longURL)
  end
end
