import axios from 'axios'

import { SignIn } from '../../features/signIn/FormSignIn'

const settings = {
  headers: {
    'API-KEY': '',
  },
  withCredentials: true,
}
const instance = axios.create({
  baseURL: '',
  ...settings,
})

// api
export const lessonsAPI = {
  getLessons(data: RequestLessons) {
    return instance.post<Lessons>('lessons', data)
  },
}

export const authAPI = {
  accountTypeChange(type: AccountType) {
    return instance.patch<AccountType>('auth/accountType', type)
  },
  login(data: SignIn) {
    return instance.post<ResponseType<ResponseUser>>('auth/login', data)
  },
  logout() {
    return instance.delete<ResponseType<{ id?: string }>>('auth/login')
  },
  me() {
    return instance.get<ResponseType<ResponseUser>>('auth/me')
  },
}

// types

export type Lessons = {
  [key: string]: LessonType[]
}

export type LessonType = {
  date: Array<string>
  id: string
  pay: boolean
  status: Status
  title: string
}
export type ResponseType<D = {}> = {
  data: D
}
export type ResponseUser = {
  accountType: AccountType
  email: string
  id: string
  img: DataAccountType
  name: DataAccountType
}

export type Status = 'notAvailable' | 'pay' | 'stroke' | 'success'
export type AccountType = 'children' | 'idle' | 'parent'
export type DataAccountType = {
  [key in AccountType]: string
}

export type RequestLessons = {
  currentMonth: string
  currentYear: string
  select: string
  userId: string
}
