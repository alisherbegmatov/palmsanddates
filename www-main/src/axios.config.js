import axios from 'axios';

export const customAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
