import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_index';


const mapStateToProps = state => ({
  requestPokemon: requestPokemon
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => dispatch(requestPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
