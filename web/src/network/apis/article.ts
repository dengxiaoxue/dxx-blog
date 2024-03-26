import { instance } from '@/network'

// 列表
export const getArticalList = (query: any) => {
  return instance.get('/article', {
    params: query,
  })
}
// 详情
export const getArticalDetail = (articleId: any) => {
  return instance.get(`/article/${articleId}`)
}
// 删除
export const deleteArtical = (articleId: any) => {
  return instance.delete(`/article/${articleId}`)
}
// 发布
export const publishartical = (data: any) => {
  return instance.post('/article', data)
}
// 编辑
export const updateArtical = (data: any) => {
  return instance.patch(`/article/${data.articleId}`, data)
}
