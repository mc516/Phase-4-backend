class User < ApplicationRecord
    has_many :comments
    has_many :camps, through: :comments

    validates :name, :password, :confirm_password, presence: :true
    validates :email_address, presence: :true, uniqueness: :true
    has_secure_password

end
