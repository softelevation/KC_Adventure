import {all} from 'redux-saga/effects';
import {authWatcher} from './login/saga';
export default function* rootSaga() {
  yield all([authWatcher()]);
}
