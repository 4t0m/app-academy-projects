import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser,
  user: fetchUser(ownProps.params.userId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
