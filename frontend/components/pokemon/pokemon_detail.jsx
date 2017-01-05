import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const moves = this.props.pokemonDetail.moves.join(', ');

    return (
      <section className="detail-section">
        <img src={this.props.pokemonDetail.image_url} width="300" height="300"></img>
        <h2>{this.props.pokemonDetail.name}</h2>
        <ul>
          <li>Type: {this.props.pokemonDetail.type}</li>
          <li>Attack: {this.props.pokemonDetail.attack}</li>
          <li>Defense: {this.props.pokemonDetail.defense}</li>
          <li>Moves: {moves}</li>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
