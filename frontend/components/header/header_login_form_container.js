import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import HeaderLoginForm from './header_login_form';

const mapStateToProps = (state) => ({
  user: { email: "", password: "" }
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLoginForm);
