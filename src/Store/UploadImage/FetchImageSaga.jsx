import { put, takeLatest, call } from 'redux-saga/effects'
import { GET } from '../../Helpers/Apis';
import { FETCH_IMG } from './ActionMethods/Action'
import { FetchImageMiddlware } from './ActionMethods/ActionCreater';


function* FetchAllImages() {
    try {
        const response = yield call(GET, 'images');
        yield put(FetchImageMiddlware(response.data));
    } catch (error) {
        console.error('Please check the internet connection.', error)
    }

}

function* WaitForFetchImages() {
    yield takeLatest(FETCH_IMG, FetchAllImages);
}

export default WaitForFetchImages
