import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import SignedInHeader from './signed_in_header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInHeader);
