import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.allPokemon;

    return <ul>
      {allPokemon.map(pokemon => (
        <li>{pokemon.name} <img src={pokemon.image_url} width="128" height="128"></img></li>
      ))}
    </ul>;
  }
}

export default PokemonIndex;
