import { RECEIVE_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user: null,
  errors: []
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, _nullUser, { user });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return state;
  }
};

export default UserReducer;
