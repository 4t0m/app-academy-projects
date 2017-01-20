class NotesController < ApplicationController

  def new
    @note = Note.new
    render :new
  end

  def create
    @track = Track.find(note_params[:track_id])
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    @note.save
    flash[:errors] = @note.errors.full_messages

    redirect_to track_url(@track)
  end

  def destroy
    @note = Note.find(params[:id])
    if current_user.id == @note.user_id
      @note.destroy
      redirect_to track_url(@note.track_id)
    else
      render text: "Can only destroy your own note", status: :forbidden
    end
  end

  private

  def note_params
    params
      .require(:note)
      .permit(:track_id, :content)
  end
end
