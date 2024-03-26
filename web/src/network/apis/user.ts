import { instance } from '@/network'

export const login = (data: any) => {
  return instance.post('/login', {
    name: data.user,
    password: data.password,
  })
}
