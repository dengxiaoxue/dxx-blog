import { instance } from '@/network'

export const getArticalList = (query: any) => {
  return instance.get('/article', {
    params: query,
  })
}

export const getArticalDetail = (articleId: any) => {
  return instance.get(`/article/${articleId}`)
}
