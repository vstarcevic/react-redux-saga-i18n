import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import { LoginActionTypes, LoginState } from '../../constants/action-types';
import { loginActions } from '../actions/action';

export type LoginActions = ActionType<typeof loginActions>;

export const  loginInitialState: LoginState = {
  userName: 'Vlada ',
  password: '',
  userRole: '',
};

const loginReducer: Reducer<LoginState, LoginActions> = (
  state = loginInitialState,
  action,
): LoginState => {
  switch (action.type) {
    case LoginActionTypes.SET_USERNAME: {
      return {...state, userName: action.payload.username};
    }
    case LoginActionTypes.SET_PASSWORD: {
      return {...state, password: action.payload.password};
    }
    case LoginActionTypes.SET_USER_ROLE: {
      return {
        ...state,
        userRole: action.payload.userRole
      };
    }
    default: {
      return state;  
    }
  }
};

export default loginReducer;
