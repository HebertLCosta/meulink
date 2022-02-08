import axios from "axios";

export const key = '4d8ae6100af0a2ac5cdc65eec72e2f3f3c06b7bf';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
});

export default api;