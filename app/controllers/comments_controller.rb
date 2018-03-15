class CommentsController < ApplicationController

def index
		@comments =Comment.all

	end

	def new
		@comment = Comment.new

	end

	def create
		@comment = Comment.new(comment_params)
		if @comment.save
			redirect_back(fallback_location: root_path)
		else
			redirect_back(fallback_location: root_path)
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
