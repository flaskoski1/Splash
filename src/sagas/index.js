import { takeEvery, put } from 'redux-saga/effects';

function* workerSaga() {
    console.log('Hey from worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({ type: 'ACTION_FROM_WORKER' });
}

function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}

export default rootSaga;
