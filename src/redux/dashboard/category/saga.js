import {ActionConstants} from '../../constants';
import {categoryError, categorySuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../../store/api-client';
import {API_URL} from 'src/utils/config';

export function* request(action) {
  // onDisplayNotification('action call');
  console.log('action call');
  try {
    const response = yield call(apiCall, 'GET', API_URL.CATEGORY_URL); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(categorySuccess(dataResponse));
    } else {
      // onDisplayNotification(response.message);
      yield put(categoryError(response));
    }
  } catch (err) {
    // onDisplayNotification(err.message);
    yield put(categoryError());
  }
}
export function* categoryWatcher() {
  yield all([takeLatest(ActionConstants.CATEGORY_REQUEST, request)]);
}
export default categoryWatcher;
