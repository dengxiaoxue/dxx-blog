<template>
  <div class="dxx-message-page">
    <div class="left">
      <div class="left-box-wrap">
        <h1 class="page-title">{{ i18n('留言板').value }}</h1>
        <Letter></Letter>
        <hr />
        <CommentBox></CommentBox>
      </div>
      <hr />
      <ChattingVue></ChattingVue>
      <ChattingVue></ChattingVue>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/utils/i18n'
import Letter from './letter.vue'
import CommentBox from './comment-box.vue'
import ChattingVue from './chatting.vue'
</script>

<style scoped lang="scss">
.dxx-message-page {
  padding: 30px 30px 150px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  .left {
    .left-box-wrap {
      background-color: var(--msg-c-bg);
      padding: 2rem 2.5rem;
      border-radius: var(--msg-border-radius);
    }
    & > div:first-child {
      transition: all 0.3s ease 0s;
    }
    hr {
      position: relative;
      margin: 40px auto;
      border: 2px dashed rgba(161, 172, 247, 0.137);
      width: calc(100% - 4px);
      box-sizing: content-box;
      height: 0;
      overflow: visible;
      &:before {
        position: absolute;
        top: -10px;
        left: 5%;
        z-index: 1;
        color: rgba(123, 139, 244, 0.137);
        content: '\f0c4';
        font-size: 16px;
        line-height: 1;
        transition: all 1s ease-in-out;
      }
    }
  }
  .right {
    width: 300px;
    padding-left: 20px;
  }
}
</style>
