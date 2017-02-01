import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = ({ session, user }, ownProps) => ({
  currentUser: session.currentUser,
  user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data, id) => dispatch(updateUser(data, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
