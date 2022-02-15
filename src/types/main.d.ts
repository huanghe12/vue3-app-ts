/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */
declare namespace Main {
  // 轮播图
  interface Swiper {
    carouselUrl: string
    redirectUrl: string
  }
  // 商品
  interface Goods {
    goodsId: number
    goodsIntro: string
    goodsName: string
    goodsCoverImg: string
    sellingPrice: number
    tag: string
  }
  interface UserInfo {
    introduceSign: string
    loginName: string
    nickName: string
    passwordMd5?: string
  }
  interface Login {
    loginName: string
    passwordMd5: string
  }
  interface Register {
    loginName: string
    password: string
  }
  type Cart = {
    cartItemId: number
    goodsCount: number
  } & Omit<Goods, 'tag' | 'goodsIntro'>
  interface GoodsDetails extends Goods {
    goodsCarouselList: Array<string>
    goodsDetailContent: string
    originalPrice: number
  }
}
