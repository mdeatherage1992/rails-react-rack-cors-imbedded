class PagesController < ApplicationController

def home
  @posts = Post.all
  render json: @posts
end

end
