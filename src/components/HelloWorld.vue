<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->
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
    color: $primary;
  }
  .van-button {
    width: 80%;
    margin-top: 30px;
    font-size: 18px;
  }
</style>
