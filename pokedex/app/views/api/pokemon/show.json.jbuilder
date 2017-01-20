json.extract! @pokemon, :id, :name, :image_url, :attack, :defense, :moves, :poke_type

json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
