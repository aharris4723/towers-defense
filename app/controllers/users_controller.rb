class UsersController < ApplicationController
  def index
  	@users = users_scores

  end
end
