import request from '@/utils/request'

const getUserInfo = () => {
  return request.get<MAIN.UserInfo, API.Response<MAIN.UserInfo>>('/user/info')
}

const editUserInfo = (data: MAIN.UserInfo) => {
  return request.put<null, API.Response<null>, MAIN.UserInfo>(
    '/user/info',
    data
  )
}

const login = (data: MAIN.Login) => {
  return request.post<any, API.Response, MAIN.Login>('/user/login', data)
}

const logout = () => {
  return request.post<any, API.Response>('/user/logout')
}

const register = (data: MAIN.Register) => {
  return request.post<any, API.Response, MAIN.Register>('user/register', data)
}

export { getUserInfo, editUserInfo, login, logout, register }
