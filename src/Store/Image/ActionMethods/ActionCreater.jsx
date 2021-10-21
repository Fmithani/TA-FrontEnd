import { ADD_IMG, FETCH_IMG, FETCH_IMG_MIDDLEWARE, UPLOAD_IMG, LOADING_ACTION, SEARCH_IMG  } from "./Action";

//-------------- for Image fatching

export const AddNewImages = file => {
    return {
        type : ADD_IMG,
        payload : file,
    }
} 


export const FetchImage = images => {
    return {
        type : FETCH_IMG,
        payload : images,
    }
}



export const FetchImageMiddlware = images => {
    return {
        type : FETCH_IMG_MIDDLEWARE,
        payload : images,
    }
}

export const SearchImage = keyword => {
    return {
        type : SEARCH_IMG,
        payload : keyword,
    }
}



//-------------- for Image Uploading

export const UploadeImage = file => {
    return {
        type : UPLOAD_IMG,
        payload : file,
    }
}

export const LoadingImage = action => {
    return {
        type : LOADING_ACTION,
        payload : action,
    }
}