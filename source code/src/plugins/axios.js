/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue';
import Axios from 'axios';
// import store from '@/store';
import AppConfig from '../config';

Axios.defaults.headers.common.Accept = 'application/json';
  export const HTTP = Axios.create({
    baseURL: AppConfig.remoteServiceBaseUrl+"/api/",
    headers: {
      headers:{
        common :{
          Accept : 'application/json',
          //Authorization sẽ được set tự động khi truy cập, hoặc khi đăng nhập, quản lý qua state
          Authorization: "",
        }    
      }
    },
    transformResponse: function (resp) {
      // Do whatever you want to transform the data
      if(resp){
        resp = JSON.parse(resp);
        return resp.result;
      }
      else{
        return resp;
      }
      
    },
  });

  HTTP.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // store.dispatch('auth/logout');
        // toastr.error("Token hết hạn, vui lòng đăng nhập lại");
      }
      return Promise.reject(error);
    });

// Bind Axios to Vue.
Vue.$http = HTTP;

Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return HTTP;
  },
});
