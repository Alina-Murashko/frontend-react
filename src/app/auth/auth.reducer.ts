import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

import { userData } from '../../common/consts/user-data'
import { SignIn } from '../../features/signIn/FormSignIn'
import { AccountType, ResponseUser, authAPI } from '../api/api'
import { appActions } from '../app.reducer'
import { AppThunk } from '../store'

const slice = createSlice({
  initialState: {
    dataUsers: userData as ResponseUser,
    isInitialized: false,
    isLoggedIn: false,
  },
  name: 'auth',
  reducers: {
    setAddDataUser: (state, action: PayloadAction<{ dataUser: ResponseUser }>) => {
      state.dataUsers = action.payload.dataUser
    },
    setChangeTypeAccount: (state, action: PayloadAction<{ accountType: AccountType }>) => {
      state.dataUsers.accountType = action.payload.accountType
    },
    setInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
    setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      state.isLoggedIn = action.payload.isLoggedIn
    },
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions

// thunks

export const initializeAppTC = () => (dispatch: Dispatch) => {
  dispatch(appActions.setAppStatus({ status: 'loading' }))
  authAPI
    .me()
    .then(res => {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
      dispatch(authActions.setAddDataUser({ dataUser: res.data.data }))
    })
    .finally(() => {
      dispatch(authActions.setInitialized({ isInitialized: true }))
      dispatch(appActions.setAppStatus({ status: 'succeeded' }))
    })
}
export const loginTC =
  (data: SignIn): AppThunk =>
  dispatch => {
    dispatch(appActions.setAppStatus({ status: 'loading' }))
    authAPI
      .login(data)
      .then(res => {
        dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
        dispatch(authActions.setAddDataUser({ dataUser: res.data.data }))
        dispatch(authActions.setChangeTypeAccount({ accountType: res.data.data.accountType }))
      })
      .catch((error: any) => {
        dispatch(appActions.setAppError(error))
      })
      .finally(() => dispatch(appActions.setAppStatus({ status: 'succeeded' })))
  }

export const logoutTC = (): AppThunk => dispatch => {
  dispatch(appActions.setAppStatus({ status: 'loading' }))
  authAPI
    .logout()
    .then(() => {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }))
      dispatch(authActions.setChangeTypeAccount({ accountType: 'idle' }))
    })
    .catch(error => {
      dispatch(appActions.setAppError({ error: error }))
    })
    .finally(() => dispatch(appActions.setAppStatus({ status: 'succeeded' })))
}

export const accountTypeChangeTC =
  (data: AccountType): AppThunk =>
  dispatch => {
    dispatch(appActions.setAppStatus({ status: 'loading' }))
    authAPI
      .accountTypeChange(data)
      .then(res => {
        dispatch(authActions.setChangeTypeAccount({ accountType: res.data }))
      })
      .catch(error => {
        dispatch(appActions.setAppError({ error }))
      })
      .finally(() => dispatch(appActions.setAppStatus({ status: 'succeeded' })))
  }
