import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

import { Lessons, RequestLessons, lessonsAPI } from '../api/api'
import { appActions } from '../app.reducer'
import { authActions } from '../auth/auth.reducer'

const initialState: Lessons = {}

const slice = createSlice({
  initialState,
  name: 'lessons',
  reducers: {
    setLessons: (state, action: PayloadAction<{ lessons: Lessons }>) => {
      return action.payload.lessons
    },
  },
})

export const lessonsReducer = slice.reducer
export const lessonsActions = slice.actions

// thunks
export const lessonsTC = (data: RequestLessons) => (dispatch: Dispatch) => {
  dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
  lessonsAPI
    .getLessons(data)
    .then(res => {
      dispatch(lessonsActions.setLessons({ lessons: res.data }))
    })
    .catch(error => {
      dispatch(appActions.setAppError({ error: error }))
    })
    .finally(() => {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }))
    })
}
