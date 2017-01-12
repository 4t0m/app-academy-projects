import * as UserApiUtil from '../util/session_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = user => (
  { type: RECEIVE_USER,
    user }
);

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);


export const receiveErrors = errors => (
  { type: RECEIVE_ERRORS,
    errors }
);
