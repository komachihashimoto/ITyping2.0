class GamesController < ApplicationController
  def index
    @rank = Rank.order(score: :desc)
  end

  def create
    @rank = Rank.new(rank_params)
    if @rank.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.js { render js: "window.location.reload();" }
      end
    end
  end

  private

  def rank_params
    params.require(:rank).permit(:nickname, :score, :country_id)
  end
end
