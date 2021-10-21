import { put, takeLatest, call } from 'redux-saga/effects'
import { GET } from '../../Helpers/Apis';
import { SEARCH_IMG } from './ActionMethods/Action'
import { FetchImageMiddlware } from './ActionMethods/ActionCreater';


function* SearchAllImages(data) {
    try {
        const label = yield data.payload;
        const response = yield call(GET, `search?label=${label}`, null, 3002);
        yield put(FetchImageMiddlware(response.data));
    } catch (error) {
        console.error('Please check the internet connection.', error)
    }

}

function* WaitForSearchImages() {
    yield takeLatest(SEARCH_IMG, SearchAllImages);
}

export default WaitForSearchImages
