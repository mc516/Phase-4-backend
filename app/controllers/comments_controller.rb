class CommentsController < ApplicationController
    # [:create, :show, :update, :destroy]

    def create
        newComment = Comment.create(body: params[:body])
        render json: newComment, status: :created
    end

    def show
    end

    def update
    end

    def destroy
    end
end
