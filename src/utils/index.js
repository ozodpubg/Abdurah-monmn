// utils/index.js
import axios from 'axios';

export const $api = axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'c5c75ee663msh248182a7b7f7b48p179c61jsn6f8136f1453d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});
