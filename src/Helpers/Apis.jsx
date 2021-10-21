import axios from 'axios'
import { headers, headers2 } from '.';
import Base_url from '.';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// Authentication if availiable in eack response
export const GetAuthentication = (formType = false) => {
    let header = formType ? headers2 : headers;
    header.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
    return header;
}


// Check User in our record
export const POST = async (...props) => {
    const url = await Base_url(props);
    if (url !== false) {
        try {
            const { data } = await axios.post(props[0], props[1], { headers: GetAuthentication() });
            return data;
        } catch (error) {
            return { success: false, message: '500 (Internal Server Error)!' };
        }
    } else {
        return { success: false, message: 'Url is not register in application! Please register first' };
    }
}

export const GET = async (...props) => {
    const url = await Base_url(props);
    // console.log(url)
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
    formdata.append(`files`, props[1]);
    const url = await Base_url(props);
    console.log(url);
    if (url !== false) {
        try {
            const { data } = await axios.post(url, formdata, { headers: GetAuthentication(true) });
            // console.log(data);
            if(data.status === true){toastr.success('file uploaded successfully!');}
            return data;
        } catch (error) {
            return { success: false, message: '500 (Internal Server Error)!' };
        }
    } else {
        return { success: false, message: 'Url is not register in application! Please register first' };
    }
};

export default UPLOAD;