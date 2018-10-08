import * as APIUtil from '.././util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => {
  return dispatch => {
    return APIUtil.login(user).then(data => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(usery => (
    dispatch(receiveCurrentUser(usery))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
   )
  )
);

export const receiveCurrentUser = (currentUser) => ({
  action: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  action: RECEIVE_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  action: RECEIVE_CURRENT_USER,
  errors
});
