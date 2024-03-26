<template>
  <dxx-table
    :data="tableData"
    style="width: 100%"
    max-height="250"
    show-overflow-tooltip
    @selection-change="handleSelectionChange"
    :row-class-name="tableRowClassName"
  >
    <dxx-table-column type="selection" />
    <dxx-table-column prop="title" label="标题" />
    <dxx-table-column prop="classify" label="分类" />
    <dxx-table-column prop="createAt" label="发布日期" />
    <dxx-table-column prop="updateAt" label="更新日期" />
    <dxx-table-column fixed="right" label="操作" width="150">
      <template #default="scope">
        <dxx-button link type="primary" size="small" @click.prevent="ToPreview(scope.row)">预览</dxx-button>
        <dxx-button link type="primary" size="small" @click.prevent="ToEdit(scope.row)">编辑</dxx-button>
        <dxx-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">删除</dxx-button>
      </template>
    </dxx-table-column>
  </dxx-table>
</template>

<script setup lang="ts">
import { DxxTable, DxxTableColumn, DxxButton } from 'dxx-web-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getArticalList } from '../api'
import dayjs from 'dayjs'

const $router = useRouter()
const multipleSelection = ref<any>([])
const tableData = ref([])
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
const getList = async () => {
  const res = await getArticalList({
    pageIndex: 1,
    pageSize: 10,
  })
  tableData.value = res.data.map((item: any) => ({
    ...item,
    createAt: dayjs(item.createAt).format('YYYY-MM-DD'),
    updateAt: dayjs(item.updateAt).format('YYYY-MM-DD'),
  }))
}

const ToPreview = (data: any) => {
  $router.push({ path: '/admin/manage/preview', query: { id: data.id } })
}
const ToEdit = (data: any) => {
  $router.push({ path: '/admin/manage/edit', query: { id: data.id } })
}

const tableRowClassName = (data: any) => {
  if (data.rowIndex % 2 === 0) {
    return 'warning-row'
  } else if (data.rowIndex === 0) {
    return 'success-row'
  }
  return ''
}

getList()
</script>

<style scoped lang="scss"></style>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
