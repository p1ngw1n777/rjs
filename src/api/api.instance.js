import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Credentials': true}
});