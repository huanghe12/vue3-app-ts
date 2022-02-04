/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/pages/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/pages/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/pages/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/product_details',
    name: 'product_details',
    component: () => import('@/pages/ProductDetails.vue'),
    meta: {
      index: 3
    }
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound'
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
