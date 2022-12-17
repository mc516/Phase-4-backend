class CampsController < ApplicationController
    def index
        render json: Camp.all, include: :comments, status: :created
    end
end
