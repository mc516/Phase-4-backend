class User < ApplicationRecord
    has_many :comments
    has_many :camps, through: :comments
    
    has_secure_password
end
