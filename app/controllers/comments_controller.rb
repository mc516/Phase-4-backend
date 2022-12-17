class CommentsController < ApplicationController

    def index
        render json: Comment.all, status: :created
    end

    def show

    end

    def create
        newComment = Comment.create(comment_params)
        render json: newComment, status: :created
    end

    def update
    end

    def destroy
    end

    private
    
    def comment_params
        params.permit(:body, :user_id, :camp_id)
    end
end
