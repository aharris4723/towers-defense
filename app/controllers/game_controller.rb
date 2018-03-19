class GameController < ApplicationController
	def index
		@comments = Comment.all

	end

	def new
		@comment = Comment.new

	end

	def create
		user = User.find_by_id(current_user.id)
		@comment = Comment.new(comment_params)
		@comment.user_id = user.id
		if @comment.save
			# redirect_back(fallback_location: comments_path)
			redirect_to "/comments"
		else
			redirect_back(fallback_location: comments_path)
		end
	end

	def show
		@comment = Comment.find(params[:id])
		

	end

	def edit
		@comment = Comment.find(params[:id])
	end

	def update
		@comment = Comment.find(params[:id])
    if @comment.update(comment_params)
    redirect_to @blog
	end

	def destroy
		@comment = Comment.find(params[:id])
    @user = current_user
    @comment.destroy
    redirect_to "/users/#{@user.id}"
	end
end
private

def comment_params
	params.require(:comment).permit(:content, :user_id)
end
end
