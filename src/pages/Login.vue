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
  <div class="login">
    <NavBar title="登录" />
    <div class="logo">
      <img
        src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      />
    </div>
    <div class="main">
      <van-form label-align="center" @submit="onSubmit">
        <van-field label="用户名" placeholder="用户名" />
        <van-field label="密码" placeholder="密码" />
        <van-field label="验证码" placeholder="输入验证码">
          <template #button>
            <van-button>发送验证码</van-button>
          </template>
        </van-field>
        <van-button
          class="btn"
          round
          block
          color="#1baeae"
          native-type="submit"
        >
          登录
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onSubmit = async () => {
  console.log('登录')
}
</script>

<style lang="scss">
.login {
  .logo {
    @include wh(120px, 120px);
    margin: 80px auto 20px;
    img {
      @include wh(100%, 100%);
      object-fit: cover;
    }
  }
  .main {
    padding: 0 20px;
  }
}
</style>
