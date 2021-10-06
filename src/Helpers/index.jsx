import CURLPath, { Base } from './Urls'

// Base Url set Here
const Base_url = `${Base}api/`

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
    if (url.includes(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com`)) {
        uri = url.replace(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com`, process.env.REACT_APP_CLOUDFRONT_ADDRESS_ODIN);
    } else if (url.includes(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.amazonaws.com`)) {
        uri = url.replace(`https://${process.env.REACT_APP_BUCKET_NAME}.s3.amazonaws.com`, process.env.REACT_APP_CLOUDFRONT_ADDRESS_ODIN);
    }
    return uri;
}

// Check the URL is register or not
const CURL = async (c) => await (CURLPath[c] === c) ?
    `${Base_url}${CURLPath[c]}` :
    false;


export default CURL