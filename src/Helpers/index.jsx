import CURLPath, { BASE_UPLOAD, BASE_RECOGNIZE, BASE_SEARCH } from './Urls'

// Base Url set Here
const Base = base_need => base_need === 3002 ? BASE_SEARCH : base_need === 3001 ? BASE_RECOGNIZE : BASE_UPLOAD;
const Base_url = props => `${Base(props[2])}api/${props[0]}`;

// Set headers for All APIs
export const headers = CURLPath.json;

export const headers2 = CURLPath.form;

// navigate back url of user
export const NavigateBack = () => window.history.back();

// reload functionallty
export const Reload = () => window.location.reload();

// json to String
export const Stringify = json => JSON.stringify(json);

// string to json
export const Json = string => JSON.parse(string);

// get distribute uri path
export const DistributeURIPath = (url) => {
    let uri = null;
    if (url) {
        if (url.includes(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com`)) {
            uri = url.replace(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com`, process.env.REACT_APP_CLOUDFRONT_ADDRESS_ODIN);
        } else if (url.includes(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.amazonaws.com`)) {
            uri = url.replace(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.amazonaws.com`, process.env.REACT_APP_CLOUDFRONT_ADDRESS_ODIN);
        }
    }
    return uri;
}


export default Base_url