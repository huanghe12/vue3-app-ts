<template>
  <van-swipe :autoplay="3000" indicator-color="#1baeae" class="my-swipe">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" @click="goTo(item.redirectUrl)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
defineProps<{
  list: APP.Swiper[]
}>()

const goTo = (url: string) => {
  window.open(url)
}
</script>
<style lang="scss" scoped>
.my-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
