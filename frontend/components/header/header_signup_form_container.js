import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import HeaderSignupForm from './header_signup_form';

const mapStateToProps = (state) => ({
  user: { email: "", password: "" }
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSignupForm);
