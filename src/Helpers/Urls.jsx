// Base
export const Base = `${process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEVELOPMENT_HOST
    : process.env.REACT_APP_API_PRODUCTION_HOST}/`;


const CURLPath = {
    json: {
        "Content-Type": "application/json",
    },
    form: {
        "Content-Type": "multipart/form-data",
    },
    images: 'images',
    'image-upload': 'image-upload',
}

export default CURLPath