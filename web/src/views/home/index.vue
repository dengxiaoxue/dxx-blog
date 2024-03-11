<template>
  <div class="dxx-home-page">
    <div class="image">
      <img src="../../assets/home.jpg" class="bgc" alt="" />
      <div class="brief">
        <img src="../../assets/home.jpg" class="avatar" alt="" />
        <div class="my-name">乌乌龟大师</div>
        <div class="my-motto">为实现每天“睡到自然醒”而奋斗</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  }
}
</style>
