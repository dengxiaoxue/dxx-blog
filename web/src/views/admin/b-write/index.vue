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
        <editor ref="editorRef" :content="content"></editor>
      </div>
      <div class="deescript">
        <div class="deescript-t">文章描述</div>
        <DxxInput
          placeholder="请输入文章描述1-100字"
          v-model="description"
          :maxlength="100"
          :showWordLimit="true"
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 13 }"
        >
        </DxxInput>
      </div>
    </div>
    <div class="right">
      <div class="btn-wrap">
        <DxxButton type="success" round @click="publish">发布文章</DxxButton>
        <!-- <DxxButton type="info" round @click="update">更新</DxxButton> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { DxxInput, DxxButton, EditPen, DxxMessage } from 'dxx-web-ui'
import { editor } from '@/components'
import { publishartical, updateArtical } from './api'

const props = defineProps<{
  data?: any
}>()

const editorRef = ref<any>(null)
const title = ref()
const description = ref()
const content = ref()

watch(
  () => props.data,
  (val: any) => {
    if (val) {
      title.value = val.title ?? ''
      description.value = val.description ?? ''
      content.value = val.content ?? ''
    }
  },
)

const publish = async () => {
  if (!validator()) return
  const data: any = {
    title: title.value,
    description: description.value,
    content: content.value,
  }
  // 编辑
  if (props?.data?.id) {
    data.articleId = props.data.id
    const res = await updateArtical(data)
    console.log(res)
    return
  }
  // 新建
  const res = await publishartical(data)
  console.log(res)
}

const validator = () => {
  if (!title.value) {
    DxxMessage.warning('请输入标题')
    return
  }
  if (!description.value) {
    DxxMessage.warning('请输入描述')
    return
  }
  content.value = editorRef.value?.editor.getHtml()
  if (!content.value) {
    DxxMessage.warning('请输入内容')
    return
  }
  return true
}
</script>

<style scoped lang="scss">
.b-write-wrap {
  display: flex;
  padding: 60px;
  justify-content: center;
}
.left {
  flex: 1;
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
  width: 200px;
  .btn-wrap {
    display: flex;
  }
}
</style>
