import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok-mern-first-backend.herokuapp.com/',
});

export default instance;
