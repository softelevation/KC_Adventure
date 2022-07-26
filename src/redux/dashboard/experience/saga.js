import {ActionConstants} from '../../constants';
import {experienceError, experienceSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../../store/api-client';
import {API_URL} from 'src/utils/config';
import {navigate} from 'src/routes/navigation-service';
import {RoutesName} from '_routeName';
import {onDisplayNotification} from 'src/utils/mobile-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decrypted} from '../../../utils/commonUtils';
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
      'GET',
      API_URL.EXPERIENCE_URL,
      action.payload,
    ); //Get request
    const dataResponse = response.data;
    if (response.status === 200) {
      yield put(experienceSuccess(dataResponse));
      // navigate(RoutesName.EXPERIENCES_DETAILS_SCREEN);
      yield call(SaveToken, dataResponse);
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
