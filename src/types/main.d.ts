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
}
