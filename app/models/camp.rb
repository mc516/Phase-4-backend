class Camp < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
end
