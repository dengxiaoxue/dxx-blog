import { createRouter, createWebHistory } from 'vue-router'

const initRouter = (options?: any) => {
  const routerOptions = options?.router?.options || {}
  const globRoutes = Object.values(options?.router?.glob || [])
    .map((item: any) => item.default)
    .filter((item) => !!item)
    .flat()
    .sort((a: any, b: any) => (a.index ?? 0) - (b.index ?? 0))

  const routes = [...globRoutes, ...(options?.routes || [])]
  const router = createRouter({ history: createWebHistory(), routes, ...routerOptions })

  return { router }
}

export { initRouter }
