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
    <NavBar title="我的" />
    <main class="main">
      <van-skeleton :loading="state.loading" avatar :row="3">
        <div class="user-info">
          <van-image
            src="https://s.yezgea02.com/1604040746310/aaaddd.png"
            round
            width="1.6rem"
            height="1.6rem"
          />
          <div class="user-desc">
            <p>昵称：{{ state.user.nickName }}</p>
            <p>登录名：{{ state.user.loginName }}</p>
            <p>个性签名：{{ state.user.introduceSign }}</p>
          </div>
        </div>
      </van-skeleton>
      <van-cell-group :border="false">
        <van-cell title="我的订单" is-link to="/my-order" />
        <van-cell title="账号管理" is-link to="setting" />
        <van-cell
          title="地址管理"
          is-link
          :to="{ path: '/address', query: { from: 'mine' } }"
        />
        <van-cell title="关于我们" is-link to="/about" />
      </van-cell-group>
    </main>
    <TabBar />
  </div>
</template>
<script lang="ts" setup>
import { getUserInfo } from '@/api/user'
import NavBar from '@/components/NavBar.vue'
import TabBar from '@/components/TabBar.vue'

const state = reactive({
  user: {} as Main.UserInfo,
  loading: false
})
const getUserInfoData = async () => {
  state.loading = true
  const { data } = await getUserInfo()
  state.user = data
  state.loading = false
}

onMounted(() => {
  getUserInfoData()
})
</script>
<style lang="scss" scoped>
.main {
  padding: 10px;
  .user-info {
    @include flex(row, flex-start, center);
    background: linear-gradient(90deg, $primary, #51c7c7);
    box-shadow: 0 2px 5px #269090;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    padding: 25px 20px;
    .user-desc {
      margin-left: 15px;
      p {
        margin: 2px;
      }
    }
  }
  .van-cell-group {
    margin-top: 20px;
  }
}
</style>
