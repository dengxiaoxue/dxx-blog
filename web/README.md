# Vue 3 + TypeScript + Vite

# 多页应用 
1.主页入口为 src/main.ts 
  访问http://127.0.0.1:5173, 即是访问 web/index.html

2.后台入口在 admin/main.ts
  访问http://127.0.0.1:5173/admin/, 即是访问 web/admin/index.html, 注意后面有跟斜杠。否则还是访问的主应用

3.应用之间的跳转：
  window.open('/login/', '_blank')
  window.open('/admin/', '_self')
  注意后面的斜杠

4.后期会考虑升级为微前端
