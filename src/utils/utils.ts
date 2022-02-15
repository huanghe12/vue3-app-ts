/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

// 获取 localstorage 中的数据
export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key) || ''
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

// 设置 localstorage 中的值
export const setLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

// 移除 localstorage 中的值
export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key)
}

// 修复图片url
export const prefixImgUrl = (url: string): string => {
  // 检查url是否以 http 开头
  if (url && url.startsWith('http')) {
    return url
  } else {
    // 不是就拼接成完整的url
    url = `http://backend-api-01.newbee.ltd${url}`
    return url
  }
}
