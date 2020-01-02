import axios from "axios";

function create(config, lint = false) {
  let instance = axios.create(config);
  if (lint) {
    instance.interceptors.request.use(
      config => {
        console.log("内置支持-拦截请求配置:");
        console.log(config);
        return config;
      },
      error => {
        console.log("内置支持-拦截请求出错:");
        console.log(error);
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      response => {
        console.log("内置支持-拦截响应内容:");
        console.log(response);
        return response;
      },
      error => {
        console.log("内置支持-拦截响应出错:");
        console.log(error);
        return Promise.reject(error);
      }
    );
  }
  return instance;
}

export { create };
