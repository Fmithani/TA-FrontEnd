import { ADD_IMG, LOADING_ACTION, FETCH_IMG_MIDDLEWARE } from "./ActionMethods/Action";

const UploadReducer = (state = {loading : false, images : []}, action = {}) => {
    switch (action.type) {
        case LOADING_ACTION:
            return {loading : action.payload, images : state.images};
        case ADD_IMG:
            return {loading : false, images : [...state.images, action.payload]};
        case FETCH_IMG_MIDDLEWARE:
            return {loading : false, images: action.payload };
        default: 
            return state;
    }
}

export default UploadReducer
