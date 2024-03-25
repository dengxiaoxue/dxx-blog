import { instance } from '@/network'

export const publishartical = (data: any) => {
  return instance.post('/article/create', data)
}

export const getArticalList = (data: any) => {
  return instance.get('/article/list', data)
}

export const updateArtical = (data: any) => {
  return instance.patch('/article/update', data)
}
