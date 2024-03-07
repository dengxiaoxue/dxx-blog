import { default as DasMainAppLayout } from './das-main-app-layout.vue'
import { default as DasMicroAppTemplate } from './template.vue'
import { microApps } from './store'

import type { Router } from 'vue-router'

const initMainApp = (options?: any) => {
  if (!options?.microApps) return { microAppRoutes: [] }
  microApps.value = []
  let microAppRoutes: any[] = []
  options.microApps.map((item: any) => {
    const microAppRouterPrefix = options?.microAppRouterPrefix || `/${item.name}`

    const microAppentry = item.entry || `//${item.name}`
    microAppRoutes.push({
      name: item.name,
      path: `${microAppRouterPrefix}/:pathMatch(.*)*`,
      component: DasMicroAppTemplate,
      meta: {
        isMicroApp: true,
        microAppName: item.name,
      },
    })

    microApps.value.push({
      ...item,
      entry: microAppentry,
      routerPrefix: microAppRouterPrefix,
    })
  })
  return { microAppRoutes }
}

const initMicroApp = (router: Router, options?: any) => {
  if (!options?.microAppName) return
  window.addEventListener('message', (e) => {
    const { type, cmd, params } = e.data || {}
    if (type === 'router') {
      // @ts-ignore
      if (router[cmd]) router[cmd](params)
    }
  })
}

export { initMainApp, initMicroApp, DasMainAppLayout }
