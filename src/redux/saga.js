import {all} from 'redux-saga/effects';
import {authWatcher} from './login/saga';
import {authSignWatcher} from './signup/saga';
import {categoryWatcher} from './dashboard/category/saga';
import {experienceWatcher} from './dashboard/experience/saga';
import {wishlistWatcher} from './wishlist/saga';
export default function* rootSaga() {
  yield all([
    authWatcher(),
    authSignWatcher(),
    categoryWatcher(),
    experienceWatcher(),
    wishlistWatcher(),
  ]);
}
