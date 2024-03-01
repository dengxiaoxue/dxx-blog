import { ref, computed } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
const currentTheme = ref("light");
let themeMap: any = {
  light: {},
  dark: {}
};
const prefix = "das-"
const initTheme = (t: any) => {
  if (!t.theme)
    return;
  themeMap = {
    light: {},
    dark: {}
  };
  // 每个模块的theme组成的数组
  const moduleThemeArr = Object.values(t.theme).map((e: any) => e.default).filter((e) => !!e).flat();
  // 分类收集主题色下的css属性
  for (const themeItem of moduleThemeArr){
    for (const key in themeItem) {
      const value = themeItem[key];
      // 逗号表达式, 在if条件里，只有最后一个表达式起判断作用。
      if (typeof value == "string" && (themeMap.light[key] = value), typeof value == "object"){
        for (const r in value){
          // 将所有模块的亮色暗色收集在一个对象中，重名会被最后一个覆盖
          themeMap[r][key] = value[r];
        }
      }
    }
  }
  // 生成两个<style></style>元素 一个id为das-light，一个为das-dark
  for (const key in themeMap) {
    const s = `${prefix}${key}`;
    vStyle(s, themeMap[key]);
  }
  document.body.classList.remove(`${prefix}light`), document.body.classList.add(`${prefix}light`);
}
const setTheme = (t: any) => {
  document.body.classList.add(`${prefix}light`)
  t === "light" && document.body.classList.remove(`${prefix}${currentTheme.value}`)
  currentTheme.value = t
  document.body.classList.add(`${prefix}${currentTheme.value}`)
} 
const $ = (t: any) => computed(() => {
  var n;
  return ((n = themeMap == null ? void 0 : themeMap[currentTheme.value]) == null ? void 0 : n[t]) ?? t;
})
const vStyle = (t: any, n: any) => {
  var e;
  // 生成一个style标签
  return document.getElementById(t) && ((e = document.getElementById(t)) == null || e.remove()), new Promise((s, o) => {
    const r: any = document.createElement("style");
    r.rel = "text/css", r.id = t;
    let u = "";
    for (const f in n)
      u += `${f}:${n[f]};`;
    r.appendChild(document.createTextNode(`.${t}{ ${u} }`)), document.getElementsByTagName("head")[0].appendChild(r), r.onload = () => s("load success"), r.onerror = () => o("load error");
  });
}
let languageMap: any = {
  zhCN: {},
  en: {}
}
const currentLang = ref("zh-CN")
const initLang = (t: any) => {
  if (!t.i18n)
    return;
  languageMap = {
    "zh-CN": {},
    en: {}
  };
  const n = Object.values(t.i18n).map((e: any) => e.default).filter((e) => !!e).flat();
  // 翻译集合
  for (const e of n)
    for (const s in e) {
      const o = e[s];
      if (typeof o == "string" && (languageMap["zh-CN"][s] = o), typeof o == "object")
        for (const r in o)
          languageMap[r][s] = o[r];
    }
}
const setLang = (t: any) => {
  currentLang.value = t;
}
const i18n = (t: any) => computed(() => {
  var n;
  return ((n = languageMap == null ? void 0 : languageMap[currentLang.value]) == null ? void 0 : n[t]) ?? t;
})
const dasWeb = {
  install: (t: any, n: any) => (
    t.use(L, n), // 安装自定义插件
    t.use(R, n), // 路由
    initTheme(n), // 初始化主题色
    initLang(n), // 初始化语言
    // 这句看起来没什么用
    n.router
      ? { routes: Object.values(n.router).map((s: any) => s.default).filter((s) => !!s).flat().sort((s, o) => (s.index ?? 0) - (o.index ?? 0)) } 
      : { routes: [] }
  ),
  // 以下这些看起来也没什么用
  initTheme,
  setTheme,
  theme: $,
  currentTheme,
  initLang,
  setLang,
  i18n,
  currentLang
}
const L = {
  install: (t: any, n: any) => {
    // 自定义插件
    n.plugins && Object.values(n.plugins).sort((e: any, s: any) => (e.index ?? 0) - (s.index ?? 0)).forEach((e: any) => {
      e.default && e.default.install && t.use(e.default, n);
    });
  }
}
const R = {
  install: (app: any, n: any) => {
    if (!n.router) return
    const result = n.router
    ? { routes: Object.values(n.router).map((s: any) => s.default).filter((s) => !!s).flat().sort((s, o) => (s.index ?? 0) - (o.index ?? 0)) } 
    : { routes: [] }
    const router = createRouter({
      history: createWebHistory(),
      routes: result.routes
    })
    app.use(router);
  }
}
export {
  dasWeb, // 作为插件使用 app.use(dasWeb2, {})时初始化
  i18n,
  initLang,
  initTheme,
  setLang,
  setTheme
};