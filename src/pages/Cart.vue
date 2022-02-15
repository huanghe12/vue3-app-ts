<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *-->

<template>
  <div>
    <NavBar title="购物车" :is-left="false" />
    <div v-if="cartStore.quantity" class="cart-body">
      <van-checkbox-group v-model="state.checkedGoods" checked-color="#1baeae">
        <van-swipe-cell v-for="(item, index) in state.cartList" :key="index">
          <van-checkbox :name="item.cartItemId" />
          <van-card
            :num="item.goodsCount"
            :title="item.goodsName"
            :thumb="prefixImgUrl(item.goodsCoverImg)"
          >
            <template #price>
              <span>￥{{ item.sellingPrice }}</span>
            </template>
            <template #footer>
              <van-stepper integer />
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              icon="delete"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <!-- 购物车没商品时显示 -->
    <van-empty
      v-if="!cartStore.quantity"
      description="购物车空空如也"
      image="https://s.yezgea02.com/1604028375097/empty-car.png"
    >
      <van-button round color="#1baeae" to="/home">前往选购</van-button>
    </van-empty>
    <TabBar />
  </div>
</template>
<script lang="ts" setup>
import { getCart } from '@/api/cart'
import TabBar from '@/components/TabBar.vue'
import { useCartStore } from '@/store/cart'
import { prefixImgUrl } from '@/utils/utils'
import NavBar from '../components/NavBar.vue'

const cartStore = useCartStore()
const state = reactive({
  checkedGoods: [] as any[],
  cartList: [] as Main.Cart[]
})
const queryCart = async () => {
  const res = await getCart({ params: { pageNumber: 1 } })
  if (res.data) {
    state.cartList = res.data
  }
}

onMounted(() => {
  queryCart()
})
</script>
<style lang="scss" scoped>
.cart-body {
  padding-left: 10px;
}
.van-swipe-cell {
  :deep(.van-swipe-cell__wrapper) {
    display: flex;
    .van-card {
      flex: 1;
      height: 120px;
      padding-left: 0;
      --van-card-thumb-size: 100px;
      --van-card-background-color: #fff;
      --van-card-price-color: red;
      --van-card-price-font-size: 16px;
      .van-card__footer {
        transform: translateY(-100%);
      }
    }
    .delete-button {
      height: 100%;
    }
  }
}

.van-empty {
  margin-top: 30%;
  --van-empty-description-font-size: 16px;
  --van-empty-description-color: #2c3e50;
  :deep(.van-empty__image) {
    img {
      object-fit: contain;
      justify-content: center;
      align-items: flex-end;
    }
  }
  :deep(.van-empty__bottom) {
    width: 50%;
    .van-button {
      width: 100%;
      --van-button-normal-font-size: 14px;
    }
  }
}
</style>
