<template>
  <div class="preview-wrap">
    <Write :data="data"></Write>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getArticalDetail } from '@/network/apis'
import { useRoute } from 'vue-router'
import Write from '../../b-write/index.vue'

const $route = useRoute()
const data = ref({})

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
  min-width: 800px;
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
