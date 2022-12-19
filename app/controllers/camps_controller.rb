class CampsController < ApplicationController
    skip_before_action :authorized, only: :index
    def index
        render json: Camp.all, include: :comments, status: :created
    end
end
