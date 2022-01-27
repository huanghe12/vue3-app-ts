import request from '@/utils/request'

interface GetParams {
  params: {
    pageNumber: number
  }
}
const getCart = (data: GetParams) => {
  // 第一个是返回值类型的 T，第二个是返回值类型，第三个是参数类型的 D
  return request.get<
    MAIN.Cart | null,
    API.Response<MAIN.Cart | null>,
    GetParams
  >('/shop-cart', data)
}

export { getCart }
