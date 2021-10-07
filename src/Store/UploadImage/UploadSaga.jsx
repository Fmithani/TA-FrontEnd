import { takeLatest, call, put } from 'redux-saga/effects'
import UPLOAD from '../../Helpers/Apis';
import { UPLOAD_IMG } from './ActionMethods/Action'
import { AddNewImages } from './ActionMethods/ActionCreater';


function* UploadeNewImage(file) {
    try {
        const files = yield file.payload;
        const response = yield call(UPLOAD, 'image-upload', files);
        yield put(AddNewImages(response.data));
    } catch (error) {
        console.error('Please check the internet connection.', error)
    }

}

function* WaitForUploadImages() {
    yield takeLatest(UPLOAD_IMG, UploadeNewImage);
}

export default WaitForUploadImages
