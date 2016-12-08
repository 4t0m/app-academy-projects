class BandsController < ApplicationController

  def index
    @bands = Band.all
    render :index
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
    @band = Band.find_by(name: band_params[:name])
    render :show
  end

  def update
  end

  def destroy
  end

  private

  def band_params
    params
      .require(:band)
      .permit(:name)
  end
end
