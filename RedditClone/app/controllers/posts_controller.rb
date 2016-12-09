class PostsController < ApplicationController

  def new
    render :new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def update
    @post = Post.find(params[:id])
    unless @post.author_id == current_user.id
      flash[:errors] = ["You cannot edit other peoples' posts"]
      redirect_to post_url(@post)
    end

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def destroy
    @post = Post.find(params[:id])
    unless @post.author_id == current_user.id
      flash[:errors] = ["You cannot delete other peoples' posts"]
      redirect_to post_url(@post)
    end

    if @post
      @post.destroy
    else
      flash[:errors] = @post.errors.full_messages
    end

    redirect_to sub_url(@post.sub_id)
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params
      .require(:post)
      .permit(:title, :url, :content, :sub_id, :author_id)
  end
end
