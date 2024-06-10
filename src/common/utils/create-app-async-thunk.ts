import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch, AppRootStateType } from '../../app/store'

/**
 Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: BaseResponseType | null
  state: AppRootStateType
}>()

type FieldErrorType = {
  error: string
  field: string
}
export type BaseResponseType<D = {}> = {
  data: D
  fieldsErrors: FieldErrorType[]
  messages: Array<string>
  resultCode: number
}
