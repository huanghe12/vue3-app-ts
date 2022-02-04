import request from '@/utils/request'

const getGoodsDetails = (id: number) => {
  return request.get<
    Main.GoodsDetails,
    API.Response<Main.GoodsDetails>,
    number
  >(`/goods/detail/${id}`)
}

export { getGoodsDetails }
