import axios from "axios";
const instance = axios.create();
instance.defaults.timeout = 1200000000;

let cancelTokenSource = axios.CancelToken.source();

const axiosCancel = () => {
  const resetCancelToken = () => {
    cancelTokenSource.cancel("HTTP Request canceled");
    cancelTokenSource = axios.CancelToken.source();
  };
  return {
    resetCancelToken
  };
};

const CancelHTTPRequest = () => {
  axiosCancel().resetCancelToken();
};

const axiosClient = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  axiosCancel,
  CancelHTTPRequest
};

export default axiosClient;
