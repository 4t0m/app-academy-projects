import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return { itemDetail: selectPokemonItem(state, ownProps.params.itemId)
    };
};


export default connect(
  mapStateToProps
)(ItemDetail);
