export const BASE_URL = 'http://192.168.1.4:5000/api/v1/';

import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.1.4:5000/api/v1/',
});
export const setAuthToken = token => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};
