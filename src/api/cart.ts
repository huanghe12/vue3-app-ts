/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

import request from '@/utils/request'

interface GetParams {
  params: {
    pageNumber: number
  }
}

interface AddCartParams {
  goodsCount: number
  goodsId: number
}
// 获取购物车中的商品
const getCart = (data?: GetParams) => {
  // 第一个是返回值类型的 T，第二个是返回值类型，第三个是参数类型的 D
  return request.get<
    Main.Cart | null,
    API.Response<Main.Cart[] | null>,
    GetParams
  >('/shop-cart', data)
}

const addGoodsToCart = (data: AddCartParams) => {
  return request.post<any, API.Response, AddCartParams>('/shop-cart', data)
}

export { getCart, addGoodsToCart }
