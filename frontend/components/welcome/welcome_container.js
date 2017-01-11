import { connect } from 'react-redux';
import { login, logout, signup, guestLogin } from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  guestLogin: () => dispatch(guestLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
