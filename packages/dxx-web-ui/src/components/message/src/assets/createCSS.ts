import { DxxIcon } from '../../../icon/index'
import { h } from 'vue'

export const changeMessageCSS = (numY = 24) => {
  console.log('changeMessageCSS', numY)
  changeCSS('das-ui-message-container', [
    {
      styleName: 'transform',
      style: `translateY(${numY}px)`,
    },
  ])
}
export const changeCSS = (id: any, data: any) => {
  const el = document.getElementById(id)
  console.log('changeCSS', el, data)
  if (!el) {
    const oel = document.createElement('div')
    oel.style.transform = 'translateY(24px)'
    oel.id = id
    oel.style.position = 'fixed'
    oel.style.top = '0'
    oel.style.left = '0'
    oel.style.width = '100%'
    oel.style.zIndex = '999999'
    document.body.appendChild(oel)
    return
  }
  for (const item of data) {
    el.style[item.styleName] = item.style
  }
}

export const getIcon = (type: any) => {
  let indicator: any = ''
  if (type == 'success') {
    indicator = h(DxxIcon, {
      icon: 'tongguo',
      iconColor: '#1BA854',
      customSize: '16',
    } as any)
  }
  if (type == 'warning') {
    indicator = h(DxxIcon, {
      icon: 'jinggao',
      iconColor: '#FF991C',
      customSize: '16',
    } as any)
  }
  if (type == 'info') {
    indicator = h(DxxIcon, {
      icon: 'tongzhi',
      iconColor: '#0E5FD8',
      customSize: '16',
    } as any)
  }
  if (type == 'error') {
    indicator = h(DxxIcon, {
      icon: 'jinggao',
      iconColor: '#FB2323',
      customSize: '16',
    } as any)
  }
  return indicator
}
export const getclass = (type: any) => {
  let indicator = ''
  if (type == 'success') {
    indicator = ' el-message--success'
  }
  if (type == 'warning') {
    indicator = ' el-message--warning'
  }
  if (type == 'info') {
    indicator = ' el-message--info'
  }
  if (type == 'error') {
    indicator = ' el-message--error'
  }
  return indicator
}
