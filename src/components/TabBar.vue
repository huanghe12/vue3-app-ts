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
  <van-tabbar active-color="#1baeae" inactive-color="#666" route>
    <van-tabbar-item to="/home">
      <template #icon>
        <i class="nbicon nblvsefenkaicankaoxianban-1" />
      </template>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item to="/category">
      <template #icon>
        <i class="nbicon nbfenlei" />
      </template>
      <span>分类</span>
    </van-tabbar-item>
    <van-tabbar-item :badge="cartStore.quantity ? cartStore.quantity : ''">
      <template #icon>
        <van-icon name="shopping-cart-o" />
      </template>
      <span>购物车</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <template #icon>
        <i class="nbicon nblvsefenkaicankaoxianban-" />
      </template>
      <span>我的</span>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts" setup>
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()
</script>
<style lang="scss" scoped>
.van-tabbar {
  .van-tabbar-item {
    .van-tabbar-item__icon {
      i {
        font-size: 22px;
      }
    }
    .van-tabbar-item__text {
      font-size: 12px;
    }
  }
}
</style>
