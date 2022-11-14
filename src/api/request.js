import axios from 'axios';
const baseUrl = 'https://dummyjson.com';

export const Request = {
  get: ({url}) => axios.get(`${baseUrl}${url}`).then(response => response.data),
};
