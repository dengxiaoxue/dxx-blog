import { instance } from '@/network'

export const getArticalDetail = (articleId: any) => {
  return instance.get(`/article/${articleId}`)
}
