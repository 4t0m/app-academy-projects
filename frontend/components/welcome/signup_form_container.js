import { connect } from 'react-redux';
import { signup, guestLogin } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  user: { email: "", password: "", fname: "", lname: "" }
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  guestLogin: () => dispatch(guestLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
