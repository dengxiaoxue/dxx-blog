import type { Plugin } from 'vue'

const dasWebPlugins = {
  install: (app, opt?) => {
    const pluginsGlob = opt?.plugins?.glob
    if (!pluginsGlob) return
    Object.values(pluginsGlob)
      .sort((a: any, b: any) => (a.index ?? 0) - (b.index ?? 0))
      .forEach((item: any) => {
        item.default && item.default.install && app.use(item.default, opt)
      })
  },
} as Plugin

export { dasWebPlugins }
