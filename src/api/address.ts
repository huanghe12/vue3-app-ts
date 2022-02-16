import request from '@/utils/request'

export class Address {
  getAddressList() {
    return request.get<Main.Address[], API.Response<Main.Address[]>>(
      '/address',
      {
        params: { pageNumber: 1, pageSize: 1000 }
      }
    )
  }
}
