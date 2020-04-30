import axios from "axios";
import { BASE_API_URL } from "./api.configs";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const {
      response: { status }
    } = error;
    if (status === 401) {
      console.log(status);
    }
    return Promise.reject(error);
  }
);

api.defaults.headers.common["Authorization"] =
  localStorage.getItem("USER_TOKEN") === null
    ? null
    : `Bearer ${localStorage.getItem("USER_TOKEN")}`;

export function setAuthorization(token) {
  api.defaults.headers.common["Authorization"] =
    token === null ? token : `Bearer ${token}`;
}

export function removeAuthorization() {
  //for Logout
  setAuthorization(null);
}
