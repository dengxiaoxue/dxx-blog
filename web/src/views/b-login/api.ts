import axios from 'axios'

const instance = axios.create({
  baseURL: '/api', // 所有的请求地址前缀部分
  timeout: 1000, // 请求超时时间毫秒
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    'Content-Type': 'application/json',
    token: 'your token',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export const login = (data: any) => {
  return instance.post('/login', {
    name: data.user,
    password: data.password,
  })
}
