import { configureStore } from '@reduxjs/toolkit'
import { AnyAction, combineReducers } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { appReducer } from './app.reducer'
import { authReducer } from './auth/auth.reducer'
import { lessonsReducer } from './lessons/lessons.reducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  lessons: lessonsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AnyAction
>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store
