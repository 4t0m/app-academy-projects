import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => {
  return {
  createNewPokemon: (params) => dispatch(createNewPokemon(params))
};};

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
