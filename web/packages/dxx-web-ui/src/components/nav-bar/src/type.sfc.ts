export type Menus = {
  name: any
  to: string
}
export interface Props {
  menus: Menus[]
  placeholder: string
  activeMenu: any
  router?: boolean
}

export interface Emits {
  (e: 'switch-theme', val: boolean): void
  (e: 'switch-lang', val: boolean): void
  (e: 'menu-handle-select', key: string, keyPath: string[]): void
}
