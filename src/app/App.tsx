import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { HomePage } from '../features/homePage/HomePage'
import { Layout } from '../features/layout/Layout'
import { CalendarLessons } from '../features/lessons/CalendarLessons'
import { SignInPage } from '../features/signIn/SignInPage'
import { authActions, initializeAppTC } from './auth/auth.reducer'
import { AppRootStateType } from './store'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialize = useSelector((state: AppRootStateType) => state.auth.isInitialized)

  useEffect(() => {
    //dispatch(initializeAppTC());
    dispatch(authActions.setInitialized({ isInitialized: true }))
  }, [dispatch])

  if (!isInitialize) {
    return (
      <div
        style={{
          color: 'gray',
          display: 'flex',
          fontSize: '40px',
          justifyContent: 'center',
          margin: '100px',
        }}
      >
        {' '}
        Загрузка ...
      </div>
    )
  }

  return (
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
  )
}
