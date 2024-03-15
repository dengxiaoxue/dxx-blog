import concurrently from 'concurrently'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  handle: (context) => {
    // 并行执行命令模块
    concurrently([
      // vite启动vue3项目
      { command: `npx vite`, name: 'vite' },
    ])
  },
}
