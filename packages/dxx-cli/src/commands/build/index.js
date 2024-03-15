import concurrently from 'concurrently'
import { resolve } from 'path'
import fs from 'fs-extra'

const initPublicConfig = async (options = {}) => {
  const { isDev } = options
  const configContent = `window.config = {}`
  // 配置文件路径
  const configPath = resolve(process.cwd(), 'public/config.js')
  const localConfigPath = resolve(process.cwd(), 'public/config.local.js')

  // 如果不存在
  if (!(await fs.exists(configPath))) {
    await fs.ensureFile(configPath) // 确保文件存在，如果请求创建的文件位于不存在的目录中，则会 创建这些目录 。如果该文件已存在，则不进行修改
    await fs.writeFile(configPath, configContent) // 写入文件
  }
  // 如果是dev环境且localConfigPath不存在, 就复制configPath过来并创建
  if (isDev) {
    if (!(await fs.exists(localConfigPath))) await fs.copyFile(configPath, localConfigPath)
  }
}


export default {
  handle: (context) => {
    // 执行指令时的文件路径：G:\test\dxx-blog\web
    const cwd = process.cwd()
    console.log(cwd)
    const options = { cwd, isDev: false, isBuild: true }
    initPublicConfig(options) // 不存在就创建配置文件，存在就不管
    // initWatchers(options)
    // concurrently([{ command: `npx vite build`, name: 'vite' }])
  },
}
