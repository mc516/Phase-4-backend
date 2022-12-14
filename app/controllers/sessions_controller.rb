class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.find_by(email_address: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: [:comments, :camps], status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            session.delete :user_id
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end
end
