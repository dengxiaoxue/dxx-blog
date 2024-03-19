export type Menus = {
  name: any
  to: string
}
export interface Props {
  menus: Menus[]
  placeholder: string
  activeMenu: any
  router?: boolean
  color?: any
}

export interface Emits {
  (e: 'switch-theme', val: any): void
  (e: 'switch-lang', val: any): void
  (e: 'menu-handle-select', key: string, keyPath: string[]): void
  (e: 'login', val?: any): void
}
