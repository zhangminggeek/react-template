import axios from 'axios';
import { message } from 'antd';
import { handleError } from './index';

export const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // 防止 GET 请求缓存GET
    if (config.method === 'get') {
      const t = new Date().getTime();
      config.params = config.params ? { ...config.params, t } : { t };
    }
    return config;
  },
  error => {
    // Do something with request error
    if (error.status === '504') {
      message.error('网关超时，请重试！');
    } else {
      message.error(`网络异常[-${error.status}]`);
      console.log(error); // for debug
    }
    Promise.reject(error);
  },
);

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === '1000') {
      return res.data;
    } else {
      if (res.code === '1007') {
        // 登录失效
        window.location.href = '/';
        return;
      }
      handleError(res);
      return Promise.reject(res);
    }
  },
  error => {
    handleError(error);
    console.log('err' + error); // for debug
    return Promise.reject(error);
  },
);

export default service;
