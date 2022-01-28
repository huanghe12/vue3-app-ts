import request from '@/utils/request'

const getUserInfo = () => {
  return request.get<Main.UserInfo, API.Response<Main.UserInfo>>('/user/info')
}

const editUserInfo = (data: Main.UserInfo) => {
  return request.put<null, API.Response<null>, Main.UserInfo>(
    '/user/info',
    data
  )
}

const login = (data: Main.Login) => {
  return request.post<any, API.Response, Main.Login>('/user/login', data)
}

const logout = () => {
  return request.post<any, API.Response>('/user/logout')
}

const register = (data: Main.Register) => {
  return request.post<any, API.Response, Main.Register>('user/register', data)
}

export { getUserInfo, editUserInfo, login, logout, register }
