import axios from 'axios';
import { auth } from "../utils/githubToken";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers : {
    Authorization : `Basic ${auth}`
  }
});

export default axiosInstance;
