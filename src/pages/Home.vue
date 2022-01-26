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
  <div style="height: 1000px">
    <!-- 头部 -->
    <header
      ref="header"
      class="home-header"
      :class="{ active: state.headerScroll }"
    >
      <router-link to=""><i class="nbicon nbmenu2" /></router-link>
      <div class="header-search">
        <span class="app-name">新蜂商城</span>
        <van-icon name="search" />
        <router-link class="search-title" to="">山河无恙，人间皆安</router-link>
      </div>
      <router-link v-if="judgeIsLogin()" class="login" to="">登录</router-link>
      <router-link v-else class="login" to="">
        <van-icon name="manager-o" />
      </router-link>
    </header>
    <!-- 轮播图 -->
    <Swiper :list="state.swiperList" />
    <!-- 分类 -->
    <van-grid :column-num="5" :border="false" square icon-size="0.96rem">
      <van-grid-item
        v-for="item in state.categoryList"
        :key="item.categoryId"
        :icon="item.imgUrl"
        :text="item.name"
        @click="$toast('敬请期待')"
      />
    </van-grid>
    <!-- 新品 -->
    <div class="goods-wrap">
      <div class="title">新品上线</div>
      <van-grid :column-num="2" class="goods-grid" :border="false">
        <van-grid-item
          v-for="item in state.newGoodses"
          :key="item.goodsId"
          class="goods-item"
        >
          <img :src="prefixImgUrl(item.goodsCoverImg)" class="goods-img" />
          <p class="goods-name">{{ item.goodsName }}</p>
          <p class="goods-price">￥{{ item.sellingPrice }}</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 热么商品 -->
    <div class="goods-wrap">
      <div class="title">热门商品</div>
      <van-grid :column-num="2" class="goods-grid" :border="false">
        <van-grid-item
          v-for="item in state.hotGoodses"
          :key="item.goodsId"
          class="goods-item"
        >
          <img :src="prefixImgUrl(item.goodsCoverImg)" class="goods-img" />
          <p class="goods-name">{{ item.goodsName }}</p>
          <p class="goods-price">￥{{ item.sellingPrice }}</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 推荐商品 -->
    <div class="goods-wrap last-goods-wrap">
      <div class="title">最新推荐</div>
      <van-grid :column-num="2" class="goods-grid" :border="false">
        <van-grid-item
          v-for="item in state.recommendGoodses"
          :key="item.goodsId"
          class="goods-item"
        >
          <img :src="prefixImgUrl(item.goodsCoverImg)" class="goods-img" />
          <p class="goods-name">{{ item.goodsName }}</p>
          <p class="goods-price">￥{{ item.sellingPrice }}</p>
        </van-grid-item>
      </van-grid>
    </div>
    <TabBar />
  </div>
</template>

<script lang="ts" setup>
import { getHome } from '@/api/home'
import { getLocalStorage, prefixImgUrl } from '@/utils/utils'
import Swiper from '@/components/Swiper.vue'
import TabBar from '@/components/TabBar.vue'
import { Toast } from 'vant'

const state = reactive({
  headerScroll: false,
  swiperList: [] as APP.Swiper[],
  categoryList: [
    {
      name: '新蜂超市',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    },
    {
      name: '新蜂服饰',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    },
    {
      name: '全球购',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    },
    {
      name: '新蜂生鲜',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    },
    {
      name: '新蜂到家',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    },
    {
      name: '充值缴费',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    },
    {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    },
    {
      name: '领劵',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    },
    {
      name: '省钱',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    },
    {
      name: '全部',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
  newGoodses: [] as APP.Goods[],
  hotGoodses: [] as APP.Goods[],
  recommendGoodses: [] as APP.Goods[]
})
// 判断是否登录了
const judgeIsLogin = (): boolean => {
  return !getLocalStorage('token')
}
// 监听页面滚动
const listenScroll = () => {
  window.addEventListener('scroll', () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    // 当滚动距离超过100时，为头部添加 active 类
    state.headerScroll = scrollTop > 100
  })
}
// 获取首页商品信息
const getHomeInfo = async () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true
  })
  const { data } = await getHome()
  state.swiperList = data.carousels
  state.newGoodses = data.newGoodses
  state.hotGoodses = data.hotGoodses
  state.recommendGoodses = data.recommendGoodses
  Toast.clear()
}
onMounted(() => {
  nextTick(() => {
    listenScroll()
  })
  getHomeInfo()
})
</script>
<style lang="scss" scoped>
.home-header {
  @include wh(100%, 50px);
  @include boxSizing;
  @include flex(row, space-between, center);
  padding: 0 15px;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .nbmenu2 {
    color: $primary;
  }
  .header-search {
    @include wh(74%, 20px);
    @include flex(row, center, center);
    line-height: 20px;
    color: #232326;
    padding: 5px 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    .app-name {
      padding-right: 10px;
      color: $primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #666;
    }
    .van-icon-search {
      padding-left: 10px;
      font-size: 17px;
      color: #666;
    }
    .search-title {
      font-size: 12px;
      color: #666;
    }
  }
  .login {
    color: $primary;
    line-height: 50px;
    font-size: 16px;
    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
  &.active {
    background-color: $primary;
    .nbmenu2,
    .login {
      color: #fff;
    }
  }
}
.goods-wrap {
  .title {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: $primary;
    font-size: 16px;
    font-weight: 500;
  }
  .goods-grid {
    .goods-item {
      border-bottom: 1px solid #e9e9e9;
      .goods-img {
        width: 120px;
      }
      .goods-name,
      .goods-price {
        text-align: center;
        font-size: 14px;
        color: #222333;
        margin: 0;
      }
      .goods-price {
        color: $primary;
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
  &.last-goods-wrap {
    padding-bottom: 80px;
  }
}
</style>
