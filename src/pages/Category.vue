<template>
  <div class="category">
    <header class="category-header">
      <i class="nbicon nbfanhui" @click="$router.push('/home')" />
      <div class="header-search">
        <i class="nbicon nbSearch" />
        <router-link class="search-title" to="">全场50元起步</router-link>
      </div>
      <van-icon name="ellipsis" />
    </header>
    <div>
      <ListScroll>
        <div>asdf</div>
      </ListScroll>
    </div>
    <TabBar />
  </div>
</template>
<script lang="ts" setup>
import ListScroll from '@/components/ListScroll.vue'
import TabBar from '@/components/TabBar.vue'
</script>
<style lang="scss" scoped>
.category {
  .category-header {
    @include wh(100%, 50px);
    box-sizing: border-box;
    background: #fff;
    line-height: 50px;
    font-size: 15px;
    color: #656771;
    z-index: 10000;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 15px;
    @include flex(row, space-between, center);
    border-bottom: 1px solid #eee;
    .header-search {
      color: #232326;
      background: #f7f7f7;
      border-radius: 20px;
      width: 80%;
      height: 20px;
      line-height: 20px;
      padding: 5px 0;
      .nbSearch {
        padding: 0 10px 0 20px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .van-icon-ellipsis {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
