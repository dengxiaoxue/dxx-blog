<template>
  <div class="bulletin-board">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import type { BulletinProps } from './type.sfc'
withDefaults(defineProps<BulletinProps>(), {
  title: '公告',
  content: '公告内容。',
})
</script>

<style scoped lang="scss">
.bulletin-board {
  width: 260px;
  height: 130px;
  padding: 15px 10px 22px;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 10px;
  background: linear-gradient(
    150deg,
    hsl(0, calc(20 * 0%), min(calc(54 * 1% + 10%), 100%)) 15%,
    #55554e 70%,
    hsl(50, calc(31 * 0%), max(calc(44 * 1.4% - 2.5%), 0%)) 95%
  );
  background: var(--bulletin-board-bg);
  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .content {
    font-size: 18px;
    line-height: 1.8;
    padding-top: 8px;
    opacity: 0.8;
  }
}
</style>
