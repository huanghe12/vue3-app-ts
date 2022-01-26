declare namespace APP {
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
}
