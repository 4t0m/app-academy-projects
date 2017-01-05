import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    debugger
    const pokemonItems = this.props.allPokemon.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));

    return <section className="pokedex">
       <ul>
        { pokemonItems }
      </ul>
    </section>;

  }
}

export default PokemonIndex;
