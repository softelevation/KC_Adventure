import {ActionConstants} from '../constants';
import {signError, signSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {API_URL, BASE_URL} from 'src/utils/config';
import {navigate} from 'src/routes/navigation-service';
import {RoutesName} from '_routeName';
import {onDisplayNotification} from 'src/utils/mobile-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SaveData = async data => {
  return await AsyncStorage.setItem('user', JSON.stringify(data));
};
const SaveToken = async data => {
  return await AsyncStorage.setItem('token', data.token);
};

export function* request(action) {
  try {
    const response = yield call(
      apiCall,
      'POST',
      API_URL.SIGNUP_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(signSuccess(dataResponse));
      navigate(RoutesName.DASHBOARD_STACK_SCREEN);
      yield call(SaveToken, dataResponse);
    } else {
      onDisplayNotification(response.message);
      yield put(signError(response));
    }
  } catch (err) {
    onDisplayNotification('Oops something went wrong');
    yield put(signError());
  }
}

export function* authSignWatcher() {
  yield all([takeLatest(ActionConstants.SIGNUP_REQUEST, request)]);
}
export default authSignWatcher;
