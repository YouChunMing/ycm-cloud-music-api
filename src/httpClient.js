import {create} from './utils/http-client';

const HTTPClient = create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
}, true);


HTTPClient.interceptors.request.use(config => {
    console.log('HTTPClient自定义-拦截请求配置');
    console.log(config);
}, error => {
    console.log('HTTPClient自定义-拦截请求错误');
    console.log(error);
});


HTTPClient.interceptors.response.use(response => {
    console.log("HTTPClient自定义-拦截响应内容:");
    console.log(response);
}, error => {
    console.log("HTTPClient自定义-拦截响应出错:");
    console.log(error);
});


export default HTTPClient;