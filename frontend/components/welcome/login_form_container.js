import { connect } from 'react-redux';
import { login, guestLogin } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
  user: { email: "", password: "" },
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  guestLogin: () => dispatch(guestLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
