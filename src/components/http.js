import axios from "axios"; // 引入axios
import Qs from "qs";
let routerIns, storeIns;
const axiosIns = axios.create({
  baseURL: "http://localhost:8001/"
});
// 请求拦截器
axiosIns.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = storeIns.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axiosIns.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          routerIns.replace({
            path: "/login",
            query: {
              redirect: routerIns.currentRoute.fullPath
            }
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          console.log("登录过期，请重新登录");
          // 清除token
          localStorage.removeItem("token");
          storeIns.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            routerIns.replace({
              path: "/login",
              query: {
                redirect: routerIns.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          console.log("网络请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          console.log(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  }
);

/*   数据格式
 *
 *  {
 *    "code":200,
 *    "message":null,
 *    "url":"",
 *    "data":
 *           {
 *             "entries": [],
 *             "pager":{"prev":1,"current":"2","next":0,"page_size":10,"total_page":2,"total":15}
 *            }
 *  }
 *
 *  {
 *      "code":404,
 *      "message":"",
 *      "url":null,
 *      "data":{}
 *   }
 *
 *   {
 *      "code":401,
 *      "message":"",
 *      "url":null,
 *      "data":[]
 *   }
 *
 * */
export function get(url, params, router, store) {
  routerIns = router;
  storeIns = store;
  return new Promise((resolve, reject) => {
    axiosIns
      .get(url, {
        timeout: 5000,
        transformRequest: [
          function(data, headers) {
            console.log(headers);
            return data;
          }
        ],
        transformResponse: [
          function(data) {
            return data;
          }
        ],
        params: params,
        paramsSerializer: function(params) {
          return Qs.stringify(params, { arrayFormat: "brackets" });
        },
        withCredentials: false, // default
        onUploadProgress: function(progressEvent) {
          console.log(progressEvent);
        },
        onDownloadProgress: function(progressEvent) {
          console.log(progressEvent);
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
export function post(url, params, router, store, data, upload) {
  routerIns = router;
  storeIns = store;
  return new Promise((resolve, reject) => {
    axiosIns
      .post(url, Qs.stringify(data), {
        timeout: upload ? 60000 : 5000, //若请求为上传文件(upload == true)，则60000超时，若为普通请求，则5000超时
        transformRequest: [
          function(data, headers) {
            console.log(headers);
            return data;
          }
        ],
        transformResponse: [
          function(data) {
            return data;
          }
        ],
        params: Qs.stringify(params),
        paramsSerializer: function(params) {
          return Qs.stringify(params, { arrayFormat: "brackets" });
        },
        withCredentials: false, // default
        onUploadProgress: function(progressEvent) {
          console.log(progressEvent);
        },
        onDownloadProgress: function(progressEvent) {
          console.log(progressEvent);
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
