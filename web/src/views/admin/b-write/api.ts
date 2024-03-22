import { instance } from '@/network'

export const publishartical = (data: any) => {
  return instance.post('/artical', data)
}
