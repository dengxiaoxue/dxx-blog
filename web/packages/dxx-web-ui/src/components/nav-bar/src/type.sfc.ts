export type Menus = {
  id: any
  name: string
}
export interface Props {
  menus: Menus[]
  placeholder: string
  activeIndex?: any
}

export interface Emits {
  (e: 'switch-theme', val: boolean): void
  (e: 'switch-lang', val: boolean): void
  (e: 'menu-handle-select', key: string, keyPath: string[]): void
}
