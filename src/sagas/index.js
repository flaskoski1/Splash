import { all, takeEvery, put, call, take } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import statsReducer from '../reducers/statsReducer';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
// import { takeEvery, put, call, take } from 'redux-saga/effects';
// import { IMAGES } from '../constants/index';
// function* handleImagesLoad() {
//     console.log('fetching images from unsplash');
//     // console.log('Hey from worker');
//     // console.log(put({ type: 'ACTION_FROM_WORKER' }));
//     // yield put({ type: 'ACTION_FROM_WORKER' });
// }
// // function* byebyeSaga() {
// //     console.log(' bye bye');
// // }

// // function* handleDang() {
// //     console.log('DANG!!');
// // }
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
//     // yield take('DANG');
//     // yield call(handleDang);
//     // yield take(IMAGES.LOAD);
//     // yield call(handleImagesLoad);

//     // yield take('LOGIN');
//     // yield call(workerSaga);
//     // // yield take('ADD_TO_CART');
//     // // yield take('BUY');
//     // yield take('LOGOUT');
//     // yield call(byebyeSaga);
// }

// export default rootSaga;
