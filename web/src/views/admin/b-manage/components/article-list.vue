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
        <dxx-button link type="danger" size="small" @click.prevent="deleteRow(scope.row)">删除</dxx-button>
      </template>
    </dxx-table-column>
  </dxx-table>
  <dxx-pagination
    background
    layout="total, prev, pager, next, sizes"
    :total="total"
    class="mt-4 dxx-pagination"
    :pager-count="7"
    :page-sizes="[10, 20, 30, 40]"
    @current-change="currentChange"
    @size-change="sizeChange"
  ></dxx-pagination>
</template>

<script setup lang="ts">
import { DxxTable, DxxTableColumn, DxxButton, DxxPagination, DxxMessage } from 'dxx-web-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getArticalList, deleteArtical } from '@/network/apis'
import dayjs from 'dayjs'

const $router = useRouter()
const multipleSelection = ref<any>([])
const tableData = ref<any>([])
const total = ref(0)
const pageIndex = ref(1)
const pageSize = ref(10)
const deleteRow = async (row: any) => {
  const res = await deleteArtical(row.id)
  if (!res) return
  DxxMessage.success('删除成功')
  getList()
}
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
const getList = async () => {
  const res: any = await getArticalList({
    pageIndex: pageIndex.value,
    pageSize: pageSize.value,
  })
  total.value = res.total
  pageIndex.value = res.pageIndex
  pageSize.value = res.pageSize
  tableData.value =
    res?.data?.map((item: any) => ({
      ...item,
      createAt: dayjs(item.createAt).format('YYYY-MM-DD'),
      updateAt: dayjs(item.updateAt).format('YYYY-MM-DD'),
    })) || []
}

const ToPreview = (data: any) => {
  $router.push({ path: '/admin/manage/preview', query: { id: data.id } })
}
const ToEdit = (data: any) => {
  $router.push({ path: '/admin/manage/edit', query: { id: data.id } })
}

const currentChange = (index: any) => {
  pageIndex.value = index
  getList()
}
const sizeChange = (size: any) => {
  pageSize.value = size
  getList()
}

const tableRowClassName = (data: any) => {
  if (data.rowIndex % 4 === 0) {
    return 'warning-row'
  } else if (data.rowIndex % 4 === 2) {
    return 'success-row'
  }
  return ''
}

getList()
</script>

<style scoped lang="scss">
.dxx-pagination {
  margin: 30px 0 10px;
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
