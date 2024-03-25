import { instance } from '@/network'

export const getArticalList = (query: any) => {
  return instance.get('/article/list', {
    params: query,
  })
}

export const updateArtical = (data: any) => {
  return instance.patch('/article/update', data)
}
