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
    <NavBar :title="type === 'login' ? '登录' : '注册'" />
    <div class="logo">
      <img
        src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      />
    </div>
    <div class="main">
      <van-form v-if="type === 'login'" label-align="left" @submit="onSubmit">
        <van-field
          v-model="state.loginName"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.loginPassword"
          type="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <a class="link-btn" @click="type = 'register'">立即注册</a>
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
      <van-form v-else label-align="left" @submit="onSubmit">
        <van-field
          v-model="state.registerName"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.registerPassword"
          type="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <a class="link-btn" @click="type = 'login'">已有帐号，去登录</a>
        <van-button
          class="btn"
          round
          block
          color="#1baeae"
          native-type="submit"
        >
          注册
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login, register } from '@/api/user'
import { setLocalStorage } from '@/utils/utils'
import { Md5 } from 'ts-md5'
import { Toast } from 'vant'
import NavBar from '@/components/NavBar.vue'

const type = ref<'login' | 'register'>('login') // 登录还是注册，初始状态为登录
const state = reactive({
  loginName: '', // 登录时的用户名
  loginPassword: '', // 登录时的密码
  registerName: '', // 注册时的用户名
  registerPassword: '' // 注册时的密码
})

const onSubmit = async () => {
  if (type.value === 'login') {
    const loginData: Main.Login = {
      loginName: state.loginName,
      passwordMd5: Md5.hashStr(state.loginPassword)
    }
    const { data } = await login(loginData)
    if (data) {
      setLocalStorage('token', data)
      window.location.href = '/'
    }
  } else {
    const registerData: Main.Register = {
      loginName: state.registerName,
      password: state.registerPassword
    }
    await register(registerData)
    Toast('注册成功')
    type.value = 'login'
  }
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
    .link-btn {
      display: block;
      font-size: 14px;
      color: #1889fa;
      margin: 20px;
    }
    .btn {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
