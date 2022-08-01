import {ActionConstants} from 'src/redux/constants';

export const experienceTopRequest = data => {
  return {
    type: ActionConstants.EXPERIENCE_REQUEST,
    data,
  };
};
export const experienceTopSuccess = data => {
  return {
    type: ActionConstants.EXPERIENCE_SUCCESS,
    data,
  };
};
export const experienceTopError = error => {
  return {
    type: ActionConstants.EXPERIENCE_ERROR,
    error,
  };
};

export const experienceRatRequest = data => {
  return {
    type: ActionConstants.EXPERIENCE_RAT_REQUEST,
    data,
  };
};
export const experienceRatSuccess = data => {
  return {
    type: ActionConstants.EXPERIENCE_RAT_SUCCESS,
    data,
  };
};
export const experienceRatError = error => {
  return {
    type: ActionConstants.EXPERIENCE_RAT_ERROR,
    error,
  };
};
