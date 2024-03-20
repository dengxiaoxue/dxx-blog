import oDxxMessage from './src/message'
import theme from './theme/index'
import { setThemeRule } from 'dxx-web'
setThemeRule(theme)
const DxxMessage = oDxxMessage
export { DxxMessage }
export default { name: 'Message 消息提示' }
