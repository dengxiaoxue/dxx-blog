<template>
  <div class="dxx-message-page">
    <div class="left">
      <h1 class="page-title">留言板</h1>
      <Letter></Letter>
      <hr />
      <!-- <Comment></Comment> -->
      <CommentBox></CommentBox>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import Letter from './letter.vue'
import Comment from './comment.vue'
import CommentBox from './comment-box.vue'
</script>

<style scoped lang="scss">
.dxx-message-page {
  height: 100%;
  padding: 94px 30px 30px 30px;
  box-sizing: border-box;
  border-top: 1px solid salmon;
  background-color: var(--essay-bg);
  display: flex;
  .left {
    flex: 1;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem 2.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 16px -4px rgba(44, 45, 48, 0.047);
    border: 1px solid #e3e8f7;
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
