import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Preloader } from '../common/components/preloader/Preloader'
import { ProgressDemo } from '../common/components/progress/Progress'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { HomePage } from '../features/homePage/HomePage'
import { Layout } from '../features/layout/Layout'
import { CalendarLessons } from '../features/lessons/CalendarLessons'
import { SignInPage } from '../features/signIn/SignInPage'
import { authActions, authThunk } from './auth/auth.reducer'
import { AppRootStateType } from './store'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialize = useSelector((state: AppRootStateType) => state.auth.isInitialized)
  const status = useSelector((state: AppRootStateType) => state.app.status)
  const isStatus = status === 'loading'

  useEffect(() => {
    //dispatch(authThunk.initializeApp())
    const timeoutId = setTimeout(() => {
      dispatch(authActions.setInitialized({ isInitialized: true }))
    }, 2000) // задержка в 2 секунды как замена ответа с сервера чтобы показать весь flow

    return () => {
      clearTimeout(timeoutId)
    }
  }, [dispatch])

  if (!isInitialize) {
    return <Preloader />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={'/'}>
            <Route element={<HomePage />} index />
            <Route element={<CalendarLessons />} path={'lessons'} />
            <Route element={<div></div>} path={'wallet'} />
            <Route element={<div></div>} path={'pazzle'} />
            <Route element={<div></div>} path={'folder'} />
            <Route element={<div></div>} path={'connection'} />
            <Route element={<div></div>} path={'queshion'} />
            <Route element={<div></div>} path={'achievements'} />
            <Route element={<div></div>} path={'setting'} />
            <Route element={<div></div>} path={'queshion'} />
          </Route>
          <Route element={<SignInPage />} path={'SignIn'} />
          <Route element={<Navigate replace to={'/'} />} path={'*'} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
