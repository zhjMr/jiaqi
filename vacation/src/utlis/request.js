import axios from 'axios'
//请求地址 超时时间
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})
//请求拦截
service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
}
);
//响应拦截
service.interceptors.response.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
}
);
export default service