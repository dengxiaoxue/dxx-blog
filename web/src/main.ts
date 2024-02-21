import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { dasWeb } from "./utils/i18n";
import DxxUI from "dxxxxx-canvas";
import "../node_modules/dxxxxx-canvas/dist/style.css"; //引入组件样式

createApp(App)
  .use(dasWeb, {
    plugins: import.meta.glob("@/plugins/*/index.ts", { eager: true }),
    router: import.meta.glob("@/views/*/router.ts", { eager: true }),
    theme: import.meta.glob("@/views/*/theme/*.ts", { eager: true }),
    i18n: import.meta.glob("@/views/*/i18n/*.ts", { eager: true }),
  })
  .use(DxxUI)
  .mount("#app");
