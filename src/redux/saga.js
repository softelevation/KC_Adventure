import {all} from 'redux-saga/effects';
import {authWatcher} from './login/saga';
import {authSignWatcher} from './signup/saga';
export default function* rootSaga() {
  yield all([authWatcher(), authSignWatcher()]);
}
