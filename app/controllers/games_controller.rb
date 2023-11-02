class GamesController < ApplicationController
  def index
  end

  def new
    @rank = Rank.new
    @score = session[:score]
  end

  def create
    @rank = Rank.new(rank_params)
    @rank.score = @score
    if @rank.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def rank_params
    params.require(rank).permit(:nickname, :score, :country_id)
  end
end
