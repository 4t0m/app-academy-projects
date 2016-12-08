class AlbumsController < ApplicationController
  def new
    @band = Band.find(params[:band_id])
    @album = Album.new(band_id: params[:band_id])
    render :new
  end

  def create
    @band = Band.find(album_params[:band_id])
    @album = Album.new(album_params)
    if @album.save
      redirect_to band_url(@band)
    else
      render :new
    end
  end

  private

  def album_params
    params
      .require(:album)
      .permit(:name, :band_id, :recording_env)
  end
end
