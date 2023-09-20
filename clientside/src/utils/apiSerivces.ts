import axios from 'axios';
import { baseUrl } from '../configs/urls';

let search = '';
let params = new URLSearchParams(search);

if ( typeof window !== 'undefined' ) {
    search = window.location.search;
    params = new URLSearchParams(search);
}

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const thunkHandler = async (asyncFn: any, thunkAPI: any) => {
    try {
        const response = await asyncFn;
        return response.data.meta
          ? {
              meta: response.data.meta,
              data: response.data.data,
          }
          : response.data.data ?? response.data;
    } catch ( error: any ) {
        if (
          error.response?.status === 400 ||
          error.response?.status === 401 ||
          error.response?.status === 403 ||
          error.response?.status === 404
        ) {
            return thunkAPI.rejectWithValue({
                type: 'error',
                status: error.response?.status,
                statusText: error.response.statusText,
                ...error.response.data,
            });
        } else {
            return thunkAPI.rejectWithValue({
                type: 'error',
                status: error?.status,
                statusText: error.statusText,
                ...error.data,
            });
        }
    }
};
