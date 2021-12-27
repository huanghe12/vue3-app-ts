/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */
import router from '@/router'
import axios from 'axios'
import { Toast } from 'vant'
import { getLocalStorage } from './utils'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    token: getLocalStorage('token') || ''
  }
})

instance.interceptors.response.use(response => {
  if (typeof response.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(response)
  }
  if (response.data.resultCode !== 200) {
    if (response.data.message) Toast.fail(response.data.message)
    if (response.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(response.data)
  }
  return response.data
})

export default instance
