import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  user: { email: "", password: "", fname: "", lname: "" }
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
