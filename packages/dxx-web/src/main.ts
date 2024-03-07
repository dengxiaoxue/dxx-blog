import { createApp, ref } from 'vue'

import { initTheme, setTheme, currentTheme, getThemeRule, setThemeRule, getVar, getVarValue } from './theme'
import { initI18n, setLang, i18n, currentLang, setI18nRule, getI18nRule, t, getLang } from './i18n'
import { initRouter } from './router'
import { dasWebPlugins } from './plugins'
import { initMainApp, initMicroApp, DasMainAppLayout } from './micro-frontend'
import { getMicroAppRouterPath, sendMessageToMicroApp, sendMessageToMainApp } from './micro-frontend/bus'

import { default as DasWebLayout } from './components/das-web-layout.vue'

import type { DasWebAppOptions } from '.'

const createDasWebApp = (options?: DasWebAppOptions) => {
  if (!options) options = {}
  const loading = ref(true)

  Promise.all([initTheme(options), initI18n(options)]).then(() => {
    loading.value = false
  })
  const { microAppRoutes } = initMainApp(options)
  const { container, component, props } = options?.root || {}
  const app = createApp(component || DasWebLayout, props)
  app.use(dasWebPlugins, options)
  const { router } = initRouter({ ...options, routes: microAppRoutes })
  initMicroApp(router, options)
  app.use(router)
  app.mount(container || '#app')

  return { app, router, loading }
}

export {
  createDasWebApp,
  initTheme,
  setTheme,
  setThemeRule,
  getThemeRule,
  currentTheme,
  getVar,
  getVarValue,
  initI18n,
  setI18nRule,
  getI18nRule,
  i18n,
  t,
  setLang,
  getLang,
  currentLang,
  DasWebLayout,
  DasMainAppLayout,
  getMicroAppRouterPath,
  sendMessageToMicroApp,
  sendMessageToMainApp,
}
