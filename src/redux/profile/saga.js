import {ActionConstants} from '../constants';
import {profileError, profileSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {API_URL} from 'src/utils/config';
import {onDisplayNotification} from 'src/utils/mobile-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAsync} from 'src/utils/local-storage';

const SaveData = async data => {
  return await AsyncStorage.setItem('user', JSON.stringify(data));
};
const SaveToken = async data => {
  return await saveAsync('token', data.token);
};

export function* request(action) {
  try {
    console.log(action.payload, 'action.payload');
    const response = yield call(
      apiCall,
      'GET',
      API_URL.PROFILE_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(profileSuccess(dataResponse));
      yield call(SaveToken, dataResponse);
    } else {
      onDisplayNotification(response.message);
      yield put(profileError(response));
    }
  } catch (err) {
    onDisplayNotification(err.message);
    yield put(profileError());
  }
}

export function* authWatcher() {
  yield all([takeLatest(ActionConstants.PROFILE_REQUEST, request)]);
}
export default authWatcher;