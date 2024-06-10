import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'

import { userData } from '../../common/consts/user-data'
import { createAppAsyncThunk } from '../../common/utils/create-app-async-thunk'
import { SignIn } from '../../features/signIn/ui/FormSignIn'
import { AccountType, ResponseUser, authAPI } from '../api/api'
import { appActions } from '../app.reducer'
import { AppThunk } from '../store'

const initializeApp = createAppAsyncThunk<
  { dataUser: ResponseUser; isInitialized: boolean; isLoggedIn: boolean },
  void
>('auth/initializeApp', async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  dispatch(appActions.setAppStatus({ status: 'loading' }))
  try {
    const res = await authAPI.me()

    return { dataUser: res.data.data, isInitialized: true, isLoggedIn: true }
  } catch (e) {
    return rejectWithValue(null)
  } finally {
    dispatch(appActions.setAppStatus({ status: 'succeeded' }))
  }
})

const login = createAppAsyncThunk<{ dataUser: ResponseUser; isLoggedIn: boolean }, SignIn>(
  'auth/login',
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(appActions.setAppStatus({ status: 'loading' }))
    try {
      const res = await authAPI.login(arg)

      return { dataUser: res.data.data, isLoggedIn: true }
    } catch (error) {
      dispatch(appActions.setAppError({ error: error as string }))

      return rejectWithValue(null)
    } finally {
      dispatch(appActions.setAppStatus({ status: 'succeeded' }))
    }
  }
)

const logout = createAppAsyncThunk<{ accountType: AccountType; isLoggedIn: boolean }, void>(
  'auth/logout',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(appActions.setAppStatus({ status: 'loading' }))
    try {
      const res = await authAPI.logout()

      return { accountType: 'idle', isLoggedIn: false }
    } catch (error) {
      dispatch(appActions.setAppError({ error: error as string }))

      return rejectWithValue(null)
    } finally {
      dispatch(appActions.setAppStatus({ status: 'succeeded' }))
    }
  }
)

const accountTypeChange = createAppAsyncThunk<{ accountType: AccountType }, { type: AccountType }>(
  'auth/accountTypeChange',
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(appActions.setAppStatus({ status: 'loading' }))
    try {
      const res = await authAPI.accountTypeChange(arg)

      return { accountType: res.data.data }
    } catch (error) {
      dispatch(appActions.setAppError({ error: error as string }))

      return rejectWithValue(null)
    } finally {
      dispatch(appActions.setAppStatus({ status: 'succeeded' }))
    }
  }
)

const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
        state.isInitialized = action.payload.isInitialized
        state.dataUsers = action.payload.dataUser
      })
      .addCase(initializeApp.rejected, (state, action) => {
        state.isInitialized = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
        state.dataUsers = action.payload.dataUser
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
        state.dataUsers.accountType = action.payload.accountType
      })
      .addCase(accountTypeChange.fulfilled, (state, action) => {
        state.dataUsers.accountType = action.payload.accountType
      })
  },
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

// reducers дописан для взаимодействия без сервера,
// санки написаны для примера на синтаксис createAsyncThunk - extraReducers для примера

export const authReducer = slice.reducer
export const authThunk = { accountTypeChange, initializeApp, login, logout }
export const authActions = slice.actions
