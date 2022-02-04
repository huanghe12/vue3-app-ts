<template>
  <div class="product">
    <NavBar title="商品详情" />
    <main>
      <van-swipe width="100%">
        <van-swipe-item
          v-for="(item, index) in goods.goodsCarouselList"
          :key="index"
        >
          <img :src="prefixImgUrl(item)" alt="" />
        </van-swipe-item>
      </van-swipe>
      <div class="goods-introduce">
        <p class="goods-title">{{ goods.goodsName || '' }}</p>
        <p class="goods-desc">免邮费 顺丰快递</p>
        <p class="goods-price">￥{{ goods.sellingPrice }}</p>
      </div>
      <div class="goods-info">
        <ul>
          <li>概述</li>
          <li>参数</li>
          <li>安装服务</li>
          <li>常见问题</li>
        </ul>
        <div class="goods-content" v-html="goods.goodsDetailContent || ''" />
      </div>
    </main>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        icon="cart-o"
        :badge="cartStore.quantity ? cartStore.quantity : ''"
        text="购物车"
        to="/cart"
      />
      <van-action-bar-button
        color="linear-gradient(to right, #6bd8d8, #1baeae)"
        text="加入购物车"
        @click="handleAddCart"
      />
      <van-action-bar-button
        color="linear-gradient(to right, #0dc3c3, #098888)"
        text="立即购买"
        @click="goToCart"
      />
    </van-action-bar>
  </div>
</template>
<script lang="ts" setup>
import { addGoodsToCart } from '@/api/cart'
import { getGoodsDetails } from '@/api/goods'
import NavBar from '@/components/NavBar.vue'
import { useCartStore } from '@/store/cart'
import { prefixImgUrl } from '@/utils/utils'
import { Toast } from 'vant'

const cartStore = useCartStore()
const router = useRouter()
const route = useRoute()
const state = reactive({
  goods: {} as Main.GoodsDetails
})
const queryDetails = async () => {
  const { goodsId } = route.query
  const { data } = await getGoodsDetails(Number(goodsId))
  state.goods = data
}

const handleAddCart = async () => {
  const { resultCode } = await addGoodsToCart({
    goodsCount: 1,
    goodsId: state.goods.goodsId
  })
  if (resultCode === 200) {
    Toast('添加成功')
    // 更新购物车数据
    cartStore.updateCart()
  }
}

const goToCart = async () => {
  const { resultCode } = await addGoodsToCart({
    goodsCount: 1,
    goodsId: state.goods.goodsId
  })
  if (resultCode === 200) {
    cartStore.updateCart()
    router.push('/cart')
  }
}

onMounted(() => {
  // 进入页面更新购物车数据
  cartStore.updateCart()
  queryDetails()
})

const { goods } = toRefs(state)
</script>
<style scoped lang="scss">
.van-swipe {
  img {
    width: 100%;
    object-fit: contain;
  }
}
.goods-introduce {
  padding: 0 10px;
  p {
    margin: 8px 0;
  }
  .goods-title {
    font-size: 18px;
    color: #333;
    text-align: left;
  }
  .goods-desc {
    font-size: 14px;
    color: #999;
  }
  .goods-price {
    color: #f63515;
    font-size: 22px;
  }
}
.goods-info {
  padding-bottom: 50px;
  margin-top: 15px;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      border-right: 1px solid #999;
      font-size: 15px;
      padding: 3px 0;
      &:last-of-type {
        border: none;
      }
    }
  }
  .goods-content {
    padding: 0 20px;
  }
}
</style>
