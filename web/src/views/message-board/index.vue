<template>
  <div class="dxx-message-page">
    <div class="left">
      <div class="left-box-wrap">
        <h1 class="page-title">留言板</h1>
        <Letter></Letter>
      </div>
      <hr />
      <div class="left-box-wrap">
        <CommentBox></CommentBox>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import Letter from './letter.vue'
import CommentBox from './comment-box.vue'
</script>

<style scoped lang="scss">
.dxx-message-page {
  padding: 30px 30px 150px;
  box-sizing: border-box;
  background-color: var(--essay-bg);
  display: flex;
  .left {
    .left-box-wrap {
      flex: 1;
      background: rgba(255, 255, 255, 0.9);
      padding: 2rem 2.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 16px -4px rgba(44, 45, 48, 0.047);
      border: 1px solid #e3e8f7;
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
