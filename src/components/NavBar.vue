<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *-->

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
