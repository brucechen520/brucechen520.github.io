import axios from 'axios';
import qs from 'qs';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export function postData (url, data) { // data 需要包含要執行那些動作的參數
    // console.log(data);
    return axios.post(url, qs.stringify(data), config)
          .then(function (response) {
            // console.log(response);
            return response.data;
          })
}
export function getUserData (url) {
  // console.log(data);
  return axios.get(url)
      .then(function (response) {
        // console.log(response);
        return response.data;
      })
}
export function getData (url, data) {
  // console.log(data);
  return axios.get(url, data)
      .then(function (response) {
        // console.log("=============");
        // console.log(response.data);
        return response.data;
      })
}  