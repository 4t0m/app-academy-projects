import React from 'react';
import {ItemIndexItem} from '../item/item_index_item';

class PokemonDetail extends React.Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestPokemon(newProps.params.pokemonId);
    }
  }

  render() {

    let moves;
    let items;
    if (this.props.pokemonDetail.id) {
      moves = this.props.pokemonDetail.moves.join(', ');
      items = this.props.pokemonDetail.items.map( item => (
          <ItemIndexItem key={item.id} item={item} />
          ));
    }

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
        <ul>
          {items}
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonDetail;
