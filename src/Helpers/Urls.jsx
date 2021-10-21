// Base
export const BASE_UPLOAD = `${process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEVELOPMENT_UPLOADING_HOST
    : process.env.REACT_APP_API_PRODUCTION__UPLOADING_HOST}/`;

export const BASE_RECOGNIZE = `${process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEVELOPMENT_RECOGNIZE_HOST
    : process.env.REACT_APP_API_PRODUCTION__RECOGNIZE_HOST}/`;

export const BASE_SEARCH = `${process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEVELOPMENT_SEARCH_HOST
    : process.env.REACT_APP_API_PRODUCTION__SEARCH_HOST}/`;

const CURLPath = {
    json: {
        "Content-Type": "application/json",
    },
    form: {
        "Content-Type": "multipart/form-data",
    },
}

export default CURLPath