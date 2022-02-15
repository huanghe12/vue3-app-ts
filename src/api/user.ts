/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

import request from '@/utils/request'

const getUserInfo = () => {
  return request.get<Main.UserInfo, API.Response<Main.UserInfo>>('/user/info')
}

const editUserInfo = (data: Main.UserInfo) => {
  return request.put<null, API.Response<null>, Main.UserInfo>(
    '/user/info',
    data
  )
}

const login = (data: Main.Login) => {
  return request.post<any, API.Response, Main.Login>('/user/login', data)
}

const logout = () => {
  return request.post<any, API.Response>('/user/logout')
}

const register = (data: Main.Register) => {
  return request.post<any, API.Response, Main.Register>('user/register', data)
}

export { getUserInfo, editUserInfo, login, logout, register }
