class GamesController < ApplicationController
  def index
    @rank = Rank.new
    @rank = Rank.order(score: :desc)
  end

  def create
    @rank = Rank.new(rank_params)
    if @rank.save
      redirect_to root_path
    else
      render :new
      puts @rank.errors.full_messages
    end
  end

  private

  def rank_params
    params.require(:rank).permit(:nickname, :score, :country_id)
  end
end
