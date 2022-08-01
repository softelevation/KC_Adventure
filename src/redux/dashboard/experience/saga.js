import {ActionConstants} from '../../constants';
import {
  experienceRatError,
  experienceRatRequest,
  experienceTopError,
  experienceTopSuccess,
} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../../store/api-client';
import {API_URL} from 'src/utils/config';
import {onDisplayNotification} from 'src/utils/mobile-utils';

export function* toprequest(action) {
  try {
    const response = yield call(
      apiCall,
      'GET',
      `${API_URL.EXPERIENCE_URL}?country=${action.data.country}`,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(experienceTopSuccess(dataResponse));
    } else {
      onDisplayNotification(response.message);
      yield put(experienceTopError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(experienceTopError());
  }
}

export function* expRating(action) {
  try {
    const response = yield call(
      apiCall,
      'POST',
       `${API_URL.EXPERIENCE_URL}?country=${action.data.country}&rating=5`,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(experienceRatRequest(dataResponse));
    } else {
      onDisplayNotification(response.message);
      yield put(experienceRatError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(experienceRatError());
  }
}

export function* experienceWatcher() {
  yield all([takeLatest(ActionConstants.EXPERIENCE_REQUEST, toprequest)]);
  yield all([takeLatest(ActionConstants.EXPERIENCE_RAT_REQUEST, expRating)]);
}
export default experienceWatcher;
