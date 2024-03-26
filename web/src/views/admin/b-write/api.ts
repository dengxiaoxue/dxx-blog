import { instance } from '@/network'

export const publishartical = (data: any) => {
  return instance.post('/article', data)
}

export const updateArtical = (data: any) => {
  return instance.patch(`/article/${data.articleId}`, data)
}
