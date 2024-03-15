#!/usr/bin/env node

// 安装此包，运行指令dxx-cli会直接执行这个文件

import { fileURLToPath } from 'url'
import { dirname, resolve, relative } from 'path'
import glob from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const createCliApp = async (options) => {
  if (!options) options = {}
  if (!options.cwd) options.cwd = process.cwd()

  const { cwd } = options

  // 获取指令后面的参数组成的数组：['dev', 'ddd']
  const commandArgv = process.argv.splice(2)
  // 获取第一个命令：dev
  const command = commandArgv[0] || 'help'

  // commands文件路径
  const globCwd = resolve(cwd, 'src/commands')
  // 遍历commands文件,获取文件夹名称：['dev', 'build'], onlyDirectories=true代表只读取文件夹，false只读取文件
  const modules = await glob('*', { cwd: globCwd, onlyDirectories: true })

  // 当前文件相对commands的相对路径：..\src\commands
  const relativePath = relative(__dirname, globCwd)

  // 所有模块的默认导出
  const modulesData = await Promise.all(
    modules.map((item) => {
      let importPath = relativePath
      importPath = importPath.replaceAll('\\', '/')
      // 导入文件下的index.js文件，必须有index.js文件，否则报错
      return import(`${importPath}/${item}/index.js`).then((module) => {
        // 获取index.js的默认导出
        const itemData = module?.default || {}
        if (!itemData.name) itemData.name = item
        return itemData
      })
    }),
  )

  // 获取指令与文件名匹配上的模块
  const module = modulesData.find((item) => {
    if (item.name === command) return true
    if (item?.alias?.includes(command)) return true
    return false
  })

  if (module && module.handle) module.handle(commandArgv, options)
}

// 获取当前包所在路径
createCliApp({ cwd: resolve(__dirname, '../') })
