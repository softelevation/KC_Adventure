import {all} from 'redux-saga/effects';
import {authWatcher} from './login/saga';
import {authSignWatcher} from './signup/saga';
import {categoryWatcher} from './categories/saga';
export default function* rootSaga() {
  yield all([authWatcher(), authSignWatcher(), categoryWatcher()]);
}
