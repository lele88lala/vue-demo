import axios from 'axios';
import $ from 'jquery';
console.log('这里');
axios.defaults.headers.post['Content-Type'] = 'application/json';
// request 拦截器，请求之前做些事情
axios.interceptors.request.use(function (config) {
  console.log('哈哈哈');
  // 去掉请求参数中的空格
  _.forIn(config.params, function (value, key) {
    typeof config.params[key] === 'number' ? config.params[key] = parseInt($.trim(value)) : config.params[key] = $.trim(value);
    config.params[key] = config.params[key] === '' ? null : config.params[key];
  });
  return config;
}, function (error) {
  // 错误处理
  return Promise.reject(error);
});

// response 拦截器，请求回应后做些事情
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 错误处理
  return Promise.reject(error);
});

// 接口
export default {
  // 登录接口
  logout () {
    return axios.post('/employee/logout');
  }
};
