class Api::PokemonController < ApplicationController

  def index
    @all_pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    @pokemon.save
    redirect_to :show
  end

  private

  def pokemon_params
    params
      .require(:pokemon)
      .permit(:name, :image_url, :attack, :defense, :poke_type, moves: [], items: [])
  end

end
