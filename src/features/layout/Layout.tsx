import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import s from './layout.module.scss'

import { AppRootStateType } from '../../app/store'
import { Header } from './ui/header/Header'
import { Menu } from './ui/menu/Menu'

export const Layout = () => {
  const isLoggedIn = useSelector((state: AppRootStateType) => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={'/SignIn'} />
  }

  return (
    <div className={s.container}>
      <Header />
      <Menu />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}

Layout.displayName = 'Layout'
