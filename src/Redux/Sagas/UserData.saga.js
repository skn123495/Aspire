import {takeLatest, put, call} from 'redux-saga/effects';
import {USER_DATA} from '../../Constants/ActionsType';
import {getUserData} from '../../Utils/ApiFunctions';

function* fetchUserData() {
  try {
    yield put({
      type: USER_DATA.USER_DATA_START,
    });
    const data = yield call(getUserData);
    yield put({
      type: USER_DATA.USER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error, 'error>');
    yield put({
      type: USER_DATA.USER_DATA_FAILED,
      payload: error.message,
    });
  } finally {
    yield put({
      type: USER_DATA.USER_DATA_END,
    });
  }
}

export function* UserDataSaga() {
  yield takeLatest(USER_DATA.FETCH_USER_DATA, fetchUserData);
}
