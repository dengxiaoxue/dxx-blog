<template>
  <div>
    <div class="comment-head">
      <div class="comment-headline">
        <DxxIcon icon="pinglun"></DxxIcon>
        <span>{{ i18n('评论').value }}</span>
      </div>
      <div class="comment-tips" id="comment-tips"><span>✅ 有什么对我想说的话？</span></div>
    </div>
    <div class="comment-wrap">
      <div class="input-wrap">
        <DxxInput placeholder="必填">
          <template #prepend>昵称</template>
        </DxxInput>
        <DxxInput placeholder="必填" class="email">
          <template #prepend>邮箱</template>
        </DxxInput>
        <DxxInput placeholder="选填">
          <template #prepend>网址</template>
        </DxxInput>
        <DxxButton disabled type="warning" plain style="margin-left: 10px; border-radius: 12px">发送</DxxButton>
      </div>
      <DxxInput
        v-model="value"
        :maxlength="500"
        :showWordLimit="true"
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 13 }"
      ></DxxInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/utils/i18n'
import { ref } from 'vue'
import { DxxIcon, DxxInput, DxxButton } from 'dxx-web-ui'
const value = ref()
</script>

<style scoped lang="scss">
.comment-head {
  font-size: 0.8em;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .comment-headline {
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.43em;
    display: flex;
    align-items: center;
  }
}
.comment-wrap {
  margin-top: 1rem;
  :deep(.el-textarea__inner) {
    background-color: #f7f7f9 !important;
    border-radius: 12px;
  }
  .input-wrap {
    margin: 10px 0;
    display: flex;
    .email {
      margin: 0 10px;
    }
    :deep(.el-input__wrapper) {
      background-color: #f7f7f9 !important;
    }
    :deep(.el-input-group__prepend) {
      background-color: #fff !important;
      padding: 0 10px !important;
    }
  }
}
</style>
