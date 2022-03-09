import {all} from 'redux-saga/effects';
import {UserDataSaga} from './UserData.saga';

export default function* rootSaga() {
  yield all([UserDataSaga()]);
}
