class Rank < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :country
  validates :nickname, :score, presence: true
  validates :nickname, length: { minimum: 2, maximum: 15 }
  validates :nickname, format: { with: /\A[a-zA-Z0-9]+\z/ }
  validates :country_id, numericality: { other_than: 1 , message: "can't be blank"}
end
