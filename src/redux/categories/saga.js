import {ActionConstants} from '../constants';
import {categoryError, categorySuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {BASE_URL, API_URL} from 'src/utils/config';
import {navigate} from 'src/routes/navigation-service';
import {RoutesName} from '_routeName';
import {onDisplayNotification} from 'src/utils/mobile-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decrypted} from '../../utils/commonUtils';
import {saveAsync} from 'src/utils/local-storage';

const SaveData = async data => {
  return await AsyncStorage.setItem('user', JSON.stringify(data));
};
// const SaveToken = async data => {
//   return await saveAsync('token', data.token);
// };

export function* request(action) {
  try {
    const response = yield call(
      apiCall,
      'GET',
      BASE_URL + API_URL.CATEGORY_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(categorySuccess(dataResponse));
      // navigate(RoutesName.EXPERIENCES_DETAILS_SCREEN);
      // yield call(SaveToken, dataResponse);
    } else {
      onDisplayNotification(response.message);
      yield put(categoryError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(categoryError());
  }
}

export function* categoryWatcher() {
  yield all([takeLatest(ActionConstants.CATEGORY_REQUEST, request)]);
}
export default categoryWatcher;
