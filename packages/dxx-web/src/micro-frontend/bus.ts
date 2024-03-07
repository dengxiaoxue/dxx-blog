import { microApps } from './store'

import type { ToMicroAppMessage } from './type'

const getMicroAppRouterPath = (name: string, path?: string) => {
  const item = microApps.value.find((item) => item.name === name)
  if (!item) return ''
  if (!path) return item.routerPrefix
  if (!path.startsWith('/')) path = `/${path}`
  return `${item.routerPrefix}${path}`
}

const sendMessageToMicroApp = (name: string, data: ToMicroAppMessage) => {
  const item = microApps.value.find((item) => item.name === name)
  if (!item) return
  item.dom!.contentWindow?.postMessage(data, item.entry)
}

const sendMessageToMainApp = (_data: ToMicroAppMessage) => {
  // const item = microApps.value.find((item) => item.name === name)
  // if (!item) return
  // item.dom!.contentWindow?.postMessage(data, item.entry)
}

// const setMicroAppRouteUrl = (name: string, path?: string) => {
//   const item = microApps.value.find((item) => item.name === name)
//   if (!item) return
//   if (!item.dom || !item.actived) return
//   item.dom.contentWindow?.postMessage(
//     {
//       type: 'router',
//       cmd: 'push',
//       path,
//     },
//     item.entry,
//   )
// }

export { getMicroAppRouterPath, sendMessageToMicroApp, sendMessageToMainApp }
