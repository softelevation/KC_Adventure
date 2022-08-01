import {ActionConstants} from '../constants';
import {wishlistError, wishlistSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {API_URL} from 'src/utils/config';
import {onDisplayNotification} from 'src/utils/mobile-utils';

export function* request(action) {
  try {
    const response = yield call(
      apiCall,
      'GET',
      API_URL.WISHLIST_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(wishlistSuccess(dataResponse));
    } else {
      onDisplayNotification(response.message);
      yield put(wishlistError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(wishlistError());
  }
}

export function* wishlistWatcher() {
  yield all([takeLatest(ActionConstants.WISHLIST_REQUEST, request)]);
}
export default wishlistWatcher;
