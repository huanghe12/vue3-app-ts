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
  <div id="app">
    <router-view v-slot="{ Component }" class="router-view">
      <transition :name="state.transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
  transitionName: 'slide-left'
})
// 路由守卫
router.beforeEach((to, from) => {
  const toIndex: number = to.meta.index as number
  const fromIndex: number = from.meta.index as number
  if (toIndex > fromIndex) {
    state.transitionName = 'slide-left' // 左滑动画
  } else if (toIndex < fromIndex) {
    state.transitionName = 'slide-right' // 右滑动画
  } else {
    state.transitionName = '' // 无动画
  }
})
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  width: 100vh;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.van-badge--fixed {
  z-index: 1000;
}
</style>
