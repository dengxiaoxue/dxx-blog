<template>
  <div class="b-write-wrap">
    <div class="left">
      <DxxInput
        :prefix-icon="EditPen"
        placeholder="给这篇文章定个小标题吧！"
        v-model="title"
        :maxlength="50"
        :showWordLimit="true"
        size="large"
      >
      </DxxInput>
      <div class="editor">
        <editor ref="editorRef"></editor>
      </div>
      <div class="deescript">
        <div class="deescript-t">文章描述</div>
        <DxxInput
          placeholder="请输入文章描述1-100字"
          v-model="value"
          :maxlength="100"
          :showWordLimit="true"
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 13 }"
        >
        </DxxInput>
      </div>
    </div>
    <div class="right">
      <div style="height: 200px"><render :content="content"></render></div>
      <div class="btn-wrap">
        <DxxButton type="success" round @click="publish">发布文章</DxxButton>
        <DxxButton type="info" round @click="save">保存为草稿</DxxButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DxxInput, DxxButton, EditPen } from 'dxx-web-ui'
import editor from './components/editor.vue'
import render from './components/render.vue'

const editorRef = ref<any>(null)
const title = ref()
const description = ref()
const content = ref(`<blockquote>模拟 Ajax 异步设置内容</blockquote>`)

const publish = () => {
  const data = {
    title: 'title',
    description: 'description',
    content: 'content',
  }
  console.log(editorRef.value?.editor.getHtml())
}

const save = () => {}
</script>

<style scoped lang="scss">
.b-write-wrap {
  display: flex;
  padding: 60px;
  justify-content: center;
}
.left {
  max-width: 1000px;
  .editor {
    margin-top: 30px;
    box-shadow: var(--box-shadow);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .deescript {
    border-radius: var(--radius);
    margin-top: 30px;
    box-shadow: var(--box-shadow);
    background-color: #fff;
    padding: 20px;
    .deescript-t {
      height: 40px;
      line-height: 40px;
    }
    :deep(.el-textarea__inner) {
      border-radius: 0;
    }
  }
}
.right {
  border: 1px solid red;
  margin-left: 60px;
  .btn-wrap {
    display: flex;
  }
}
</style>
