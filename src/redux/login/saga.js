import {ActionConstants} from '../constants';
import {authError, authSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {API_URL, BASE_URL} from 'src/utils/config';
import {navigate} from 'src/routes/navigation-service';
import {RoutesName} from '_routeName';
import {onDisplayNotification} from 'src/utils/mobile-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decrypted} from '../../utils/commonUtils';
import {saveAsync} from 'src/utils/local-storage';

const SaveData = async data => {
  return await AsyncStorage.setItem('user', JSON.stringify(data));
};
const SaveToken = async data => {
  return await saveAsync('token', data.token);
};

export function* request(action) {
  try {
    const response = yield call(
      apiCall,
      'POST',
      BASE_URL + API_URL.lOGIN_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(authSuccess(dataResponse));
      navigate(RoutesName.DASHBOARD_STACK_SCREEN);
      yield call(SaveToken, dataResponse);
    } else {
      onDisplayNotification(response.message);
      yield put(authError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(authError());
  }
}

export function* authWatcher() {
  yield all([takeLatest(ActionConstants.LOGIN_REQUEST, request)]);
}
export default authWatcher;
