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
