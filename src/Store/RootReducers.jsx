import { combineReducers } from "redux"
import FetchImagesReducer from "./Image/FetchImagesReducer";

const RootReducers = combineReducers({
    images : FetchImagesReducer,
});

export default RootReducers
