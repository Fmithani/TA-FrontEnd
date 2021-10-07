import { combineReducers } from "redux"
import FetchImagesReducer from "./UploadImage/FetchImagesReducer";

const RootReducers = combineReducers({
    images : FetchImagesReducer,
});

export default RootReducers
