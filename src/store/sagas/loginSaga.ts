import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { apiCall, serviceUrl } from '../../api/api'
import { LoginActionTypes } from '../../constants/action-types'
import { reactLocalStorage } from 'reactjs-localstorage'
import {
  setUserName,
  getUserName,
  tryLogin,
  loginSuccess,
} from '../actions/loginActions'
import { ToDo } from '../../models/response/Todo'
import { AxiosResponse } from 'axios'
import { history } from '../../store/store'

export function* tryLogInSaga(action: ReturnType<typeof tryLogin>) {
  try {
    const response: AxiosResponse = yield call(
      apiCall,
      'POST',
      serviceUrl.login,
      { username: '', password: '' }
    )

    if (response.data) {
      const list = response.data

      console.log(response.status)
      const data1 = list as ToDo[]

      for (let entry of data1) {
        console.log(entry.title) // 1, "string", false
      }
    }
  } catch {
    console.log('Error setting userName')
  }
}

export function* loginSuccessSaga(action: ReturnType<typeof loginSuccess>) {
  try {
    yield history.push('/home');
  } catch {
    console.log('Error setting userName')
  }
}

export function* setUserNameSaga(action: ReturnType<typeof setUserName>) {
  try {
    yield call(reactLocalStorage.set, 'username', action.payload.username)
  } catch {
    console.log('Error setting userName')
  }
}

export function* getUserNameSaga(action: ReturnType<typeof getUserName>) {
  try {
    let username: string = yield call(reactLocalStorage.get, 'username')

    if (username && username.length > 0) {
      yield put(setUserName(username))
    }
  } catch {
    console.log('Error setting userName')
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchLogin() {
  yield takeEvery(LoginActionTypes.SET_USERNAME, setUserNameSaga)
  yield takeEvery(LoginActionTypes.GET_USERNAME, getUserNameSaga)
  yield takeEvery(LoginActionTypes.TRY_LOGIN, tryLogInSaga)
  yield takeEvery(LoginActionTypes.LOG_IN_SUCCESS, loginSuccessSaga)
}

// We can also use `fork()` here to split our saga into multiple watchers.
export default function* loginSaga() {
  yield all([fork(watchLogin)])
}
