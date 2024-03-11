<template>
  <div class="dxx-home-page">
    <div class="image">
      <img src="../../assets/images/home.jpg" class="bgc" alt="" />
      <div class="brief">
        <img src="../../assets/images/avatar.jpg" class="avatar" alt="" />
        <div class="my-name">乌乌龟大师</div>
        <div class="my-motto">为实现每天“睡到自然醒”而奋斗</div>
      </div>
      <div class="arrow">
        <DxxIcon icon="arrow"></DxxIcon>
        <svg
          t="1710134589381"
          class="icon"
          viewBox="0 0 1536 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="21842"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
        >
          <path
            d="M1488.469333 656.213333L889.856 50.346667A168.277333 168.277333 0 0 0 770.048 0C725.162667 0 682.069333 18.090667 650.24 50.346667L51.712 656.213333a172.8 172.8 0 0 0-46.165333 166.656c15.445333 59.904 61.696 106.666667 120.917333 122.368a167.936 167.936 0 0 0 164.693333-46.677333l478.976-484.693333 478.890667 484.693333c66.474667 64.853333 172.032 64 237.397333-2.133333a172.885333 172.885333 0 0 0 2.048-240.298667z"
            fill="#ffffff"
            p-id="21843"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxIcon } from 'dxx-web-ui'
</script>

<style scoped lang="scss">
.dxx-home-page {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  .image {
    height: calc(100vh - 63px); // todo: vh是什么
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
      background-color: rgba(0, 0, 0, 0.7);
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
      border: 1px solid saddlebrown;
      cursor: pointer;
      .icon {
        position: relative;
        color: antiquewhite;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
