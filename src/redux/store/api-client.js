import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from 'src/utils/config';

const client = axios.create({
  baseURL: API_URL.BASE_URL,
  headers: {
    Accept: 'application/json',
    // Authorization: 'Bearer',
  },
  timeout: 100000,
});
/**
 * Request Wrapper with default success/error actions
 */
client.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.authorization = `${token}`;
      }
    }
    return config;
  },
  error => console.log(error),
);

export const apiCall = function (method, route, body = null) {
  const onSuccess = function (response) {
    console.log('Request Successful!', response);
    return {
      data: response.data,
      status: response.status,
    };
  };

  const onError = function (error) {
    console.log('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx

      console.log('Data:', error.response.data);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error.message);
    }
    const data = error.response.status === 401 ? '' : error.message;

    return Promise.reject(error.response.data || data);
  };

  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};
