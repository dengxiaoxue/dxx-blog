export interface IconProps {
  /** 图标名称 */
  icon: string
  /** 图标尺寸: large=20px; medium=16px; small=14px; mini=12px */
  size?: 'large' | 'big' | 'medium' | 'small' | 'mini'
  /** 自定义图标尺寸，若此属性存在，则忽略size属性 */
  customSize?: string
  /** 图标颜色 */
  iconColor?: string
}
