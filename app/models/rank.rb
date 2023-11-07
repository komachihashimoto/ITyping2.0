class Rank < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :country
  validates :nickname, :score, presence: true
  validates :country_id, numericality: { other_than: 1 , message: "can't be blank"}
end

