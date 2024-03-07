import type { Plugin } from 'vue'
import type { RouterOptions } from 'vue-router'

export type DasWebAppOptions = {
  /** 根节点相关配置，可以配置createApp使用的组件和props以及挂载的节点 */
  root?: {
    component?: any
    props?: any
    container?: any
  }

  router?: {
    glob?: any
    options?: RouterOptions
  }
  theme?: {
    glob?: any
  }
  i18n?: {
    glob?: any
  }
  plugins?: {
    glob?: any
  }

  /** 主应用名称，配置了之后会被初始化为主应用 */
  mainAppName?: string
  
  /** 作为主应用时，子应用的数组microApps，此项设置后会被识别为主应用,  */
  microApps?: {
    /** 子应用名称，必须和子应用仓库的microAppName一致 */
    name: string

    /** 子应用的入口地址，默认是主应用host+应用名称，开发环境可以配置，打包时最好不要进行配置 */
    entry?: string

    /** 子应用的仓库地址，用于打包时自动clone */
    repository?: string
  }[]

  /** 非空值时注册为微前端子应用，填入的值为应用标识名称 */
  microAppName?: string
}
