import { ref } from 'vue'

type MicroAppConfig = {
  name: string
  routerPrefix?: string
  entry: string
  src?: string
  loaded?: boolean
  actived?: boolean
  currentFullPath?: string

  dom?: HTMLIFrameElement
}

export const microApps = ref<MicroAppConfig[]>([])
