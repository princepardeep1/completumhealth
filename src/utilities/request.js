import Axios, { AxiosRequestConfig } from 'axios';
import { urls } from './constants';
console.log(urls.baseUrl, 'urls.baseUrl')

const axios = Axios.create({
    baseURL: urls.baseUrl,
    validateStatus: (status) => {
        if (status === 200 || status === 401 || status === 201) {
            return true;
        }
        return false;
    },
    timeout: 50000 //30 seconds
});

export const request = (config: AxiosRequestConfig) => axios(config).then((response) => {
    console.log(response, 'respinseeeeee')
    return response;
});
