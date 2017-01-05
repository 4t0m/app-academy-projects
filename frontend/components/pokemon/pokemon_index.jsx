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
        <li><img src={pokemon.image_url} width="30" height="30"></img>{pokemon.name} </li>
      ))}
    </ul>;
  }
}

export default PokemonIndex;
