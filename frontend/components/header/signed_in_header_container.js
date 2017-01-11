import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SignedInHeader from './signed_in_header';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInHeader);
