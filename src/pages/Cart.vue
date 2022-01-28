<template>
  <div>
    <NavBar title="购物车" :is-left="false" />
    <van-empty
      v-if="!state.cartList.length"
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
import NavBar from '../components/NavBar.vue'

const state = reactive({
  cartList: [] as Main.Cart[]
})
const queryCart = async () => {
  const res = await getCart({ params: { pageNumber: 1 } })
  if (res) {
    res.data
  }
}

onMounted(() => {
  queryCart()
})
</script>
<style lang="scss" scoped>
.van-empty {
  margin-top: 30%;
  --van-empty-description-font-size: 16px;
  --van-empty-description-color: #2c3e50;
  :deep(.van-empty__image) {
    img {
      object-fit: contain;
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
