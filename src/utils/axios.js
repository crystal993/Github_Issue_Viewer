import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    config.headers.accept = 'application/vnd.github+json';
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default instance;
