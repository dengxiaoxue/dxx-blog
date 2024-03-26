<template>
  <div class="dxx-essay-page">
    <essayItem v-for="item in listData" :item="item"></essayItem>
  </div>
</template>

<script setup lang="ts">
import essayItem from './components/essay-item.vue'
import { getArticalList } from './api'
import { ref } from 'vue'
import dayjs from 'dayjs'

const listData = ref([])
const getList = async () => {
  const res = await getArticalList({
    pageIndex: 1,
    pageSize: 10,
  })
  listData.value = res.data.map((item: any) => ({
    ...item,
    createAt: dayjs(item.createAt).format('YYYY-MM-DD'),
    updateAt: dayjs(item.updateAt).format('YYYY-MM-DD'),
  }))
}

getList()
</script>

<style scoped lang="scss">
.dxx-essay-page {
  padding: 94px 30px 30px 30px;
  box-sizing: border-box;
}
</style>
