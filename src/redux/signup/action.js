import {ActionConstants} from '../constants';
// Agent List
export const signRequest = payload => {
  return {
    type: ActionConstants.SIGNUP_REQUEST,
    payload,
  };
};
export const signSuccess = data => {
  return {
    type: ActionConstants.SIGNUP_SUCCESS,
    data,
  };
};
export const signError = error => {
  return {
    type: ActionConstants.SIGNUP_ERROR,
    error,
  };
};
// export const profileRequest = payload => {
//   return {
//     type: ActionConstants.PROFILE_REQUEST,
//     payload,
//   };
// };
// export const profileSuccess = data => {
//   return {
//     type: ActionConstants.PROFILE_SUCCESS,
//     data,
//   };
// };
// export const profileError = error => {
//   return {
//     type: ActionConstants.PROFILE_ERROR,
//     error,
//   };
// };
