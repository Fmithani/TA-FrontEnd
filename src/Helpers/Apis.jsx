import axios from 'axios'
import { headers, headers2 } from '.';
import CURL from '.'

// Authentication if availiable in eack response
export const GetAuthentication = (formType = false) => {
    let header = formType ? headers2 : headers;
    header.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
    return header;
}


// Check User in our record
export const POST = async (...props) => {
    const url = await CURL(props[0]);
    if (url !== false) {
        try {
            const { data } = await axios.post(url, props[1], { headers: GetAuthentication() });
            return data;
        } catch (error) {
            return { success: false, message: '500 (Internal Server Error)!' };
        }
    } else {
        return { success: false, message: 'Url is not register in application! Please register first' };
    }
}

export const GET = async (...props) => {
    const url = await CURL(props[0]);
    // console.log(GetAuthentication() )
    if (url !== false) {
        try {
            const { data } = await axios.get(url, { headers: GetAuthentication() });
            return data;
        } catch (error) {
            return { success: false, message: '500 (Internal Server Error)!' };
        }
    } else {
        return { success: false, message: 'Url is not register in application! Please register first' };
    }
}

// For Uploading image
const UPLOAD = async (...props) => {
    let formdata = new FormData();
    formdata.append(`file`, props[1][0]);
    const url = await CURL(props[0]);
    if (url !== false) {
        try {
            const { data } = await axios.post(url, formdata, { headers: GetAuthentication(true) });
            return data;
        } catch (error) {
            return { success: false, message: '500 (Internal Server Error)!' };
        }
    } else {
        return { success: false, message: 'Url is not register in application! Please register first' };
    }
};

export default UPLOAD;