class CommentsController < ApplicationController
    require 'byebug'
    def index
        render json: Comment.all, status: :created
    end

    def show
        comment = Comment.find_by(id: params[:id])
        if comment
            render json: comment
        else
            render json: { error: "Comment not found"},status: :not_found
        end
    end

    def create
        newComment = Comment.create(comment_params)
        render json: newComment, status: :created
    end

    def update
    end

    def destroy
        # comment = Comment.find_by(id: params[:id])
        # if comment?
        #     comment.destroy
        #     head :no_content, status: :ok
        # else
        #     render json: { error: "Comment not found"}, status: :not_found
        byebug
    end

    private
    
    def comment_params
        params.permit(:body, :user_id, :camp_id)
    end
end
