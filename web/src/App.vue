<template>
  <DxxNavBar
    :menus="menus"
    :placeholder="i18n('placeholder-search').value"
    @switch-theme="(val: boolean) => val? setTheme('dark'): setTheme('light')"
    @switch-lang="(val: boolean) => val ? setLang('en'): setLang('zh-CN')"
  >
  </DxxNavBar>
  <div>
    <a href="#">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <button type="button" @click="setLang('zh-CN')">
    {{ i18nText.Chinese }}
  </button>
  <button type="button" style="margin-left: 10px" @click="setLang('en')">
    {{ i18nText.English }}
  </button>
  <div>
    <router-link to="/"> {{ i18nText.home }} </router-link>
    -
    <router-link to="/about"> {{ i18nText.demo }} </router-link>
    <router-view></router-view>
  </div>
  <demo></demo>
  <DxxHelloWorld msg="我是hello world组件"></DxxHelloWorld>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { i18n, setLang, setTheme } from './utils/i18n'
import { DxxHelloWorld, DxxNavBar } from 'dxx-web-ui'

const i18nText = reactive({
  home: i18n('home-router'),
  demo: i18n('essay-router'),
  Chinese: i18n('Chinese'),
  English: i18n('English')
})

const menus = ref([
  { id: '1', name: i18n('home-router') },
  { id: '2', name: i18n('essay-router') },
  { id: '3', name: i18n('photo-router') },
  { id: '4', name: i18n('message-router') }
])
</script>

<style>
/* 修改颜色 */
body {
  background: var(--common-bg);
  color: var(--common-color);
}
button {
  background: var(--common-btn-bg);
  color: var(--common-btn-color);
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
