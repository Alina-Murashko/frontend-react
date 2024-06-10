import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

import { createAppAsyncThunk } from '../../common/utils/create-app-async-thunk'
import { Lessons, RequestLessons, lessonsAPI } from '../api/api'
import { appActions } from '../app.reducer'

const initialState: Lessons = {}

const lessons = createAppAsyncThunk<{ lessons: Lessons }, { data: RequestLessons }>(
    'calendar/lessons',
    async (arg, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI

        dispatch(appActions.setAppStatus({ status: 'loading' }))
        try {
            const res = await lessonsAPI.getLessons(arg.data)

            return { lessons: res.data.data }
        } catch (error) {
            dispatch(appActions.setAppError({ error: error as string }))

            return rejectWithValue(null)
        } finally {
            dispatch(appActions.setAppStatus({ status: 'succeeded' }))
        }
    }
)

const slice = createSlice({
  initialState,
  name: 'calendar',
  reducers: {
    setLessons: (state, action: PayloadAction<{ lessons: Lessons }>) => {
      return action.payload.lessons
    },
  },
    extraReducers:(builder) => {
      builder.addCase(lessons.fulfilled,(_, action) => {
          return action.payload.lessons
      })
    }
})

// thunks

export const lessonsThunks = {lessons}
export const lessonsReducer = slice.reducer
export const lessonsActions = slice.actions

// reducers дописан для взаимодействия без сервера,
// санки написаны для примера на синтаксис createAsyncThunk - extraReducers для примера
