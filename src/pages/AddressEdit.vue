<template>
  <div>
    <NavBar :title="navTitle" />
    <van-address-edit
      class="edit-container"
      :area-list="areaList"
      :show-delete="state.type === 'edit'"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
    />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import { areaList } from '@vant/area-data'

const route = useRoute()

const state = reactive({
  type: route.query.type
})

// 使用计算属性得到导航栏标题
const navTitle = computed(() => {
  return state.type === 'add' ? '新增地址' : '编辑地址'
})
</script>

<style lang="scss" scoped>
.edit-container {
  :deep(.van-button--danger) {
    background-color: $primary;
    border-color: $primary;
  }
}
</style>
