class CommentsController < ApplicationController
   require 'byebug'

   skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Comment.all, include: [:user, :camp], status: :created
    end

    def show
        comment = find_comment
        if comment
            render json: comment
        else
            render_comment_not_found
        end
    end

    def create
        newComment = Comment.create(comment_params)
        render json: newComment, include: [:user, :camp], status: :created
    end

    def update
        comment = find_comment
        if comment  
            comment.update(comment_params)
            render json: comment, include: [:user, :camp], status: :accepted
        else
            render_comment_not_found
        end
       
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content, status: :ok
        else
            render_comment_not_found
        end
    end

    private
    
    def comment_params
        params.permit(:body, :user_id, :camp_id)
    end

    def find_comment
        Comment.find_by(id: params[:id])
    end

    def render_comment_not_found
        render json: { error: "Comment not found"}, status: :not_found
    end
end
