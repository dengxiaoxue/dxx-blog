import { createApp } from 'vue'
import '@/style.css'
import App from '@/views/admin/App.vue'
import { dasWeb } from '@/utils/i18n'
import DxxWebUI from 'dxx-web-ui'
import '@/assets/fonts/font.css'
import 'virtual:svg-icons-register' // 新增图标

createApp(App)
  .use(dasWeb, {
    plugins: import.meta.glob('@/plugins/*/index.ts', { eager: true }),
    router: import.meta.glob('@/views/admin/*/router.ts', { eager: true }),
    theme: import.meta.glob('@/views/admin/*/theme/*.ts', { eager: true }),
    i18n: import.meta.glob('@/views/admin/*/i18n/*.ts', { eager: true }),
  })
  .use(DxxWebUI)
  .mount('#app')
