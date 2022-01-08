import { put, call, takeLatest } from 'redux-saga/effects';
import { getUserRequest, getUserSuccess, getUserFailure } from '../slices/user';
import { getUser } from '../services/user';

function* getUserRequestSaga() {
  try {
    const res = yield call(getUser);
    yield put(getUserSuccess(res.data.results[0]));
  } catch (err) {
    yield put(getUserFailure());
  }
}

function* userWatcher() {
  yield takeLatest(getUserRequest.type, getUserRequestSaga);
}

export default userWatcher;
