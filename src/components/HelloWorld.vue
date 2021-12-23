<template>
  <p class="msg">{{ msg }}</p>
  <van-button type="primary" color="#1baeae" round @click="click">click</van-button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const click = () => {
    count.value++
    console.log(`点击了${count.value}下`)
  }
</script>
<style lang="scss" scoped>
  .msg {
    text-align: center;
    font-size: 16px;
    color: #1baeae;
  }
  .van-button {
    width: 80%;
    margin-top: 30px;
    font-size: 18px;
  }
</style>
