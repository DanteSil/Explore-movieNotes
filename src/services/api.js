import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api492.herokuapp.com"
});
