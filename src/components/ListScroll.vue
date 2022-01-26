<template>
  <div ref="scrollWrap">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import BScroll from '@better-scroll/core'

const scrollWrap = ref<HTMLElement | null>(null)

onMounted(() => {
  new BScroll(scrollWrap.value!, {})
})
</script>
<style lang="scss" scoped></style>
