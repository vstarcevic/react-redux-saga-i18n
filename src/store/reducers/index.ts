import { combineReducers } from 'redux'
import { ActionType } from 'typesafe-actions'
import { LoginActionTypes, LoginState } from '../../constants/action-types'

import loginReducer from './loginReducer'
import { connectRouter } from 'connected-react-router'

// The top-level state object
export interface ApplicationState {
  readonly login: LoginState
}

export type LoginAction = ActionType<typeof LoginActionTypes>

export const appReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  login: loginReducer,
})

