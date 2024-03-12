<template>
  <div class="image">
    <img src="@/assets/images/home.jpg" class="bgc" alt="" />
    <div class="brief">
      <img src="@/assets/images/avatar.jpg" class="avatar" alt="" />
      <div class="my-name">乌乌龟大师</div>
      <div class="my-motto">为实现每天“睡到自然醒”而奋斗</div>
    </div>
    <div class="arrow" @click="clickArrow">
      <DxxIcon icon="arrow" customSize="50" iconColor="#fff" class="arrow-icon"></DxxIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxIcon } from 'dxx-web-ui'
const emit = defineEmits<{
  (e: 'click-arrow', data?: any): void
}>()
const clickArrow = () => {
  emit('click-arrow')
}
</script>

<style scoped lang="scss">
.image {
  height: 100vh; // todo: vh是什么
  position: relative;
  .bgc {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left bottom; // todo: 对齐方式 根据图片内容手动确认 后期可增加上传剪裁图片的功能 来替换此项
  }
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  .brief {
    z-index: 1;
    position: absolute;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    .avatar {
      width: 160px;
      height: 160px;
      border-radius: 6px;
    }
    .my-name {
      font-size: 40px;
      height: 80px;
      line-height: 80px;
      font-weight: 700;
      color: #fff;
      text-shadow: 1px 1px 8px #f6f7ffcc;
      filter: drop-shadow(4px 4px 4px rgb(12 25 50 / 80%));
    }
    .my-motto {
      color: #fff;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      height: 28px;
      text-shadow: 1px 1px 8px #f6f7ffcc;
      filter: drop-shadow(4px 4px 4px rgb(12 25 50 / 80%));
    }
  }
  .arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 1;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
    .arrow-icon {
      position: relative;
      color: rgb(219, 162, 88);
      transform: rotate(180deg);
      animation: scroll-down-effect 1.5s infinite;
    }
  }
}

@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
  }
  50% {
    top: -16px;
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
  }
}
</style>
