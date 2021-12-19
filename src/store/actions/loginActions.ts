import { action } from 'typesafe-actions'
import { LoginActionTypes } from '../../constants/action-types'


export const tryLogin = () =>
  action(LoginActionTypes.TRY_LOGIN, {  })
export const setUserName = (username: string) =>
  action(LoginActionTypes.SET_USERNAME, { username })
export const getUserName = () =>
  action(LoginActionTypes.GET_USERNAME)
export const setPassword = (password: string) =>
  action(LoginActionTypes.SET_PASSWORD, { password })
export const setUserRole = (userRole: string) =>
  action(LoginActionTypes.SET_USER_ROLE, { userRole })
export const loginUserRequest = () =>
  action(LoginActionTypes.LOG_IN_REQUEST, {})
export const loginSuccess = () => 
  action(LoginActionTypes.LOG_IN_SUCCESS, {})
