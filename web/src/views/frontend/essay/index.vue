<template>
  <div class="dxx-essay-page">
    <essayItem v-for="item in listData" :item="item" class="essay-item" @click="() => ToPreview(item)"></essayItem>
  </div>
</template>

<script setup lang="ts">
import essayItem from './components/essay-item.vue'
import { getArticalList } from '@/network/apis'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const $router = useRouter()
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

const ToPreview = (data: any) => {
  $router.push({ path: `/essay/${data.id}`, query: { id: data.id, title: data.title } })
}

console.log(location.href)

getList()
</script>

<style scoped lang="scss">
.dxx-essay-page {
  padding: 94px 30px 30px 30px;
  box-sizing: border-box;
  .essay-item {
    margin-bottom: 30px;
  }
}
</style>
