<script setup lang="ts">
import { reactive } from "vue";
import { i18n, setLang, setTheme } from "./utils/i18n";

const i18nText = reactive({
  home: i18n("home-router"),
  demo: i18n("demo-router"),
  light: i18n("light"),
  dark: i18n("dark"),
});
</script>

<template>
  <div>
    <a href="#">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button type="button" @click="setLang('zh-CN')">中</button>
  <button type="button" style="margin-left: 10px" @click="setLang('en')">
    英
  </button>
  <button type="button" @click="setTheme('light')">{{ i18nText.light }}</button>
  <button type="button" style="margin-left: 10px" @click="setTheme('dark')">
    {{ i18nText.dark }}
  </button>
  <div>
    <router-link to="/"> {{ i18nText.home }} </router-link>
    -
    <router-link to="/about"> {{ i18nText.demo }} </router-link>
    <router-view></router-view>
  </div>
</template>

<style>
/* 修改颜色 */
body {
  background: var(--hello-bg);
  color: var(--hello-color);
}
button {
  background: var(--btn-bg);
  color: var(--btn-color);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
