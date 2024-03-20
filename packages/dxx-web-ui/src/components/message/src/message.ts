import { ElMessage } from 'element-plus'
import { changeMessageCSS, getIcon, getclass } from './assets/createCSS'
import 'element-plus/es/components/message/style/css'
import './assets/message.scss'
import type { Message, MessageHandler, messageType } from 'element-plus'
changeMessageCSS()
let messageInstance: MessageHandler = {
  close() {},
}
const originOptions = {
  offset: 16,
  // 默认3s
  duration: 3000,
}

const DasMessage: Message = (options: any) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options = { ...originOptions, ...options }
  options.customClass = options.customClass?.concat(' das-ui-message') || 'das-ui-message'
  if (!options.appendTo) {
    options.appendTo = '#das-ui-message-container'
  }
  if (!options.icon) {
    options.icon = getIcon(options.type)
    options.customClass = options.customClass.concat(getclass(options.type))
  }
  messageInstance = ElMessage(options)
  return messageInstance
}

DasMessage.error = (options: any) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options.type = 'error'
  return DasMessage(options)
}
DasMessage.success = (options: any) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options.type = 'success'
  return DasMessage(options)
}
DasMessage.info = (options: any) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options.type = 'info'
  return DasMessage(options)
}
DasMessage.warning = (options: any) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options.type = 'warning'
  return DasMessage(options)
}
DasMessage.closeAll = (type?: messageType) => {
  return ElMessage.closeAll(type)
}
export default DasMessage
