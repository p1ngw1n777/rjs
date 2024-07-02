import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/',
  //baseURL: 'https://dominilashping.ru/',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    'Content-Type': 'application/json',
    "Cache-Control": "no-cache",
  }
});
