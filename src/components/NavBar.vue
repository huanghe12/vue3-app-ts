<template>
  <van-nav-bar
    :title="title"
    :left-arrow="isLeft"
    fixed
    placeholder
    :z-index="999"
    @click-left="back"
  >
    <template #right>
      <van-icon name="ellipsis" />
    </template>
  </van-nav-bar>
</template>
<script lang="ts" setup>
interface Props {
  title: string
  isLeft?: boolean
  backUrl?: string
}
// 使用 withDefaults 为 props 提供默认值
const props = withDefaults(defineProps<Props>(), {
  title: '',
  isLeft: true,
  backUrl: undefined
})

const emits = defineEmits<{
  (e: 'callback'): void
}>()
const router = useRouter()

const back = () => {
  if (!props.backUrl) {
    router.go(-1)
  } else {
    router.push(props.backUrl)
  }
  emits('callback')
}
</script>
<style lang="scss" scoped>
.van-nav-bar__placeholder {
  --van-nav-bar-icon-color: #252525;
  --van-nav-bar-text-color: #252525;
  --van-nav-bar-title-font-size: 14px;
}
.van-icon-ellipsis {
  font-size: 20px;
  font-weight: bold;
}
</style>
