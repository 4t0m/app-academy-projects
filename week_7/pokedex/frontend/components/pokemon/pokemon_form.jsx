import React from 'react';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Name",
        image_url: "Image Url",
        poke_type: "Type",
        attack: "Attack",
        defense: "Defense",
        moves: "Moves"
      };
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
      return e => this.setState({[property]: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      let pokemon = this.state;
      pokemon.moves = [pokemon.moves];
      this.props.createNewPokemon(pokemon).then(newPokemon => {
        this.props.router.push(`pokemon/${newPokemon.id}`);
      });
    }

    parseMoves(movesString) {
      return [movesString];
    }

    render() {
      return (<form onSubmit={this.handleSubmit}>
        <input onChange={this.update('name')} value={this.state.name}></input>
        <input onChange={this.update('image_url')} value={this.state.image_url}></input>
        <input onChange={this.update('poke_type')} value={this.state.poke_type}></input>
        <input onChange={this.update('attack')} value={this.state.attack}></input>
        <input onChange={this.update('defense')} value={this.state.defense}></input>
        <input onChange={this.update('moves')} value={this.state.moves}></input>
        <button>Create Pokemon</button>
      </form>
    );}
}

export default withRouter(PokemonForm);
