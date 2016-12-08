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

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  def show
    @album = Album.find(params[:id])
    @band = Band.find(@album.band_id)
    render :show
  end

  def destroy
    @album = Album.find(params[:id])
    @band = Band.find(@album.band_id)
    @album.destroy
    redirect_to band_url(@band)
  end

  private

  def album_params
    params
      .require(:album)
      .permit(:name, :band_id, :recording_env)
  end
end
