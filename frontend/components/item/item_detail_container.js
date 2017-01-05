import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return {   itemDetail: selectPokemonItem(state, ownProps.params.id),
             };
};
//
// const mapDispatchToProps = dispatch => ({
//   requestPokemon: (id) => dispatch(requestPokemon(id))
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ItemDetail);
