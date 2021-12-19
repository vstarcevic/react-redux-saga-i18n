
export enum LoginActionTypes {
    INITIALIZE_LANGUAGE = '@@login/INITIALIZE_LANGUAGE',
    TRY_LOGIN = '@@login/TRY_LOGIN',
    SET_USERNAME = '@@login/SET_USERNAME',
    GET_USERNAME = '@@login/GET_USERNAME',
    SET_PASSWORD = '@@login/SET_PASSWORD',
    LOG_IN_REQUEST = '@@login/LOG_IN_REQUEST',
    LOG_IN_SUCCESS = '@@login/LOG_IN_SUCCESS',
    SET_USER_ROLE = '@@login/SET_USER_ROLE',
    SET_USER_PERMISSIONS = '@@login/SET_USER_PERMISSIONS',
  }

export interface LoginState {
    userName: string;
    password: string;
    userRole: string;
  }
  