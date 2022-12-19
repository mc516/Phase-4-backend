class CommentsController < ApplicationController
   require 'byebug'

   skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Comment.all, include: :user, status: :created
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
        render json: newComment, include: :user, status: :created
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment  
            comment.update(comment_params)
            render json: comment, include: :user, status: :accepted
        else
            render json: { error: "Comment not found"}, status: :not_found
        end
        # byebug
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content, status: :ok
        else
            render json: { error: "Comment not found"}, status: :not_found
        end
        # byebug
    end

    private
    
    def comment_params
        params.permit(:body, :user_id, :camp_id)
    end
end
