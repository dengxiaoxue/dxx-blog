<template>
  <div class="dxx-home-page">
    <Bg @click-arrow="handleClickArrow"></Bg>
    <div class="container" ref="containerRef">
      <div class="left">
        <DxxDivider class="left-dilider" title="随笔"></DxxDivider>
        <RecentNews></RecentNews>
        <DxxDivider class="left-dilider dilider" title="留言"></DxxDivider>
        <Message></Message>
      </div>
      <div class="right">
        <DxxBulletinBoard title="公告" content="三月份学业繁忙停更一阵，四月份积极更新。"></DxxBulletinBoard>
        <DxxAuthorCard height="315"></DxxAuthorCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DxxDivider } from 'dxx-web-ui'
import { DxxAuthorCard, DxxBulletinBoard } from '@/components'
import Bg from './components/bg.vue'
import RecentNews from './components/recent.vue'
import Message from './components/message.vue'

const containerRef = ref<Element | null>(null)
const handleClickArrow = () => {
  containerRef.value?.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.dxx-home-page {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;

  .container {
    margin: 30px 20px;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1;
      .left-dilider {
        padding-right: 15px;
      }
      .dilider {
        margin-top: 50px;
      }
      :deep(.el-divider__text) {
        background-color: var(--common-bg);
        color: var(--common-color);
      }
    }
    .right {
      width: 260px;
      margin: 50px 0 0 15px;
    }
  }
}
</style>
