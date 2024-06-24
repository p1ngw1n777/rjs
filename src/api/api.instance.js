import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/',
  headers: {
    'Content-Type': 'application/json',
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*"
  }
});