import { all } from 'redux-saga/effects';
import WaitForFetchImages from './Image/FetchImageSaga';
import WaitForUploadImages from './Image/ImageSaga';
import WaitForSearchImages from './Image/SearchImageSaga';

function *RootSaga() {
    yield all([WaitForFetchImages(), WaitForUploadImages(), WaitForSearchImages()]);
}

export default RootSaga;