class CampsController < ApplicationController
    def index
        render json: Camp.all, status: :created
    end
end
