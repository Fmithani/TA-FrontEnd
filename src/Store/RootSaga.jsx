import { all } from 'redux-saga/effects';
import WaitForFetchImages from './UploadImage/FetchImageSaga';
import WaitForUploadImages from './UploadImage/UploadSaga';

function *RootSaga() {
    yield all([WaitForFetchImages(), WaitForUploadImages()]);
}

export default RootSaga;