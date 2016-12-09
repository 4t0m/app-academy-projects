class SubsController < ApplicationController

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    if @sub
      render :edit
    else
      flash[:errors] = @sub.errors.full_messages
      redirect_to subs_url
    end
  end

  def update
    @sub = Sub.find(params[:id])
    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def index
    render :index
  end

  def show
    @sub = Sub.find(params[:id])
    if @sub
      render :show
    else
      flash[:errors] = @sub.errors.full_messages
      redirect_to subs_url
    end
  end

  private

  def sub_params
    params
      .require(:sub)
      .permit(:title, :mod_id, :description)
  end
end
