import {combineReducers} from 'redux';
import {ActionConstants} from '../../constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
  isSuccess: false,
};

const ratedState = {
  loading: false,
  data: [],
  error: '',
  isSuccess: false,
};
export function experience(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionConstants.EXPERIENCE_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.EXPERIENCE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}

export function experienceRating(state = ratedState, action) {
  switch (action.type) {
    case ActionConstants.EXPERIENCE_RAT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionConstants.EXPERIENCE_RAT_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.EXPERIENCE_RAT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}

const experienceReducer = combineReducers({
  experience,
  experienceRating,
});

export default experienceReducer;
