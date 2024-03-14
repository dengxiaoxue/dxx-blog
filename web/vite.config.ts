import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// Node.js 不能识别 TypeScript 文件，因此需要在编译 TypeScript 文件之后再执行它们----所以vite.config.ts中的插件尽量使用js编写
// todo: 有时间完成ui库icon插件抽离

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'node_modules/dxx-web-ui/src/components/icon/src/icons/svg')], // 与本地储存地址一致
      // 指定symbolId格式
      symbolId: '[name]',
    }),
  ],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
})
