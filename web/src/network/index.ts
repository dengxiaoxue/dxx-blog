import axios from 'axios'
import { authAPI } from './config'
import { DxxMessage } from 'dxx-web-ui'

const setToken = (tk: any) => {
  localStorage.setItem('dxx-token', `Bearer ${tk}`)
}
const getToken = () => {
  return localStorage.getItem('dxx-token')
}
// const removeToken = () => {
//   localStorage.removeItem('dxx-token')
// }

const instance = axios.create({
  baseURL: '/api', // 所有的请求地址前缀部分
  timeout: 1000, // 请求超时时间毫秒
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

instance.defaults.timeout = 2500
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    if (config.url && authAPI.includes(config.url)) {
      const token = getToken()
      token && (config.headers.Authorization = token)
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if (response?.config?.url && response.config.url === '/login') {
      const token = response?.data?.token
      token && setToken(token)
    }
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    DxxMessage.error(error.response.data ?? '报错了')
    return Promise.reject(error?.response?.data ?? {})
  },
)

export { instance }
