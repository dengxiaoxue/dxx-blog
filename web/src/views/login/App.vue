<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
  overflow-y: overlay;
  box-sizing: border-box;
  position: relative;
}
</style>
