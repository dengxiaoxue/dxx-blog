<template>
  <div class="preview-wrap">
    <h1>{{ data?.title }}</h1>
    <div class="content"><render :content="data?.content"></render></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getArticalDetail } from '@/network/apis'
import { render } from '@/components'

const $route = useRoute()
const data = ref<any>({})

const getDetail = async () => {
  const res = await getArticalDetail($route.query.id)
  data.value = res
}

getDetail()
</script>

<style scoped lang="scss">
.preview-wrap {
  background-color: #fff;
  margin: auto;
  max-width: 1000px;
  box-shadow: var(--box-shadow);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  .content {
    flex: 1;
    min-height: 0;
  }
}
</style>
