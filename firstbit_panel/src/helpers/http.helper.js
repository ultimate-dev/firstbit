import ax from "axios";
import { api_url } from "../configs/config";

const axios = ax.create({ baseURL: api_url });
const CancelToken = ax.CancelToken;
let _cancel;


let userToken = localStorage.getItem("userToken");

axios.interceptors.request.use(
  (config) => {
    config.headers.common["x-access-token"] = `Bearer ${userToken}`;
    return config;
  },
  (err) => Promise.reject(err)
);

function post(endpoint, data) {
  return axios
    .post(endpoint, data, {
      cancelToken: new CancelToken(function executor(c) {
        _cancel = c;
      }),
    })
    .then((res) => res.data);
}

function put(endpoint, data) {
  return axios
    .put(endpoint, data, {
      cancelToken: new CancelToken(function executor(c) {
        _cancel = c;
      }),
    })
    .then((res) => res.data);
}

function get(endpoint, data) {
  return axios
    .get(endpoint, {
      headers: data,
      cancelToken: new CancelToken(function executor(c) {
        _cancel = c;
      }),
    })
    .then((res) => res.data);
}

function del(endpoint, data) {
  return axios
    .delete(endpoint, {
      headers: data,
      cancelToken: new CancelToken(function executor(c) {
        _cancel = c;
      }),
    })
    .then((res) => res.data);
}

function cancel() {
  if (_cancel !== undefined) return _cancel();
}

export { post, put, get, del, cancel };
