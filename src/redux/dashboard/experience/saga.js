import {ActionConstants} from '../../constants';
import {experienceError, experienceSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../../store/api-client';
import {API_URL} from 'src/utils/config';
import {onDisplayNotification} from 'src/utils/mobile-utils';

export function* request(action) {
  try {
    const response = yield call(
      apiCall,
      'GET',
      API_URL.EXPERIENCE_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(experienceSuccess(dataResponse));
    } else {
      onDisplayNotification(response.message);
      yield put(experienceError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(experienceError());
  }
}

export function* experienceWatcher() {
  yield all([takeLatest(ActionConstants.EXPERIENCE_REQUEST, request)]);
}
export default experienceWatcher;
