import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import classNames from 'classnames'

import s from './header.module.scss'

import { AccountType } from '../../../../app/api/api'
import { appActions } from '../../../../app/app.reducer'
import { authActions, authThunk } from '../../../../app/auth/auth.reducer'
import { lessonsActions } from '../../../../app/lessons/lessons.reducer'
import { AppRootStateType } from '../../../../app/store'
import UserDropdown from '../../../../common/components/dropdown/userDropdown/UserDropdown'
import { Typography } from '../../../../common/components/typography/Typography'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import Messages from "../../../../assets/icons/Messages";
import {Button} from "../../../../common/components/button/Button";

export const Header = forwardRef<ElementRef<'header'>, ComponentPropsWithoutRef<'header'>>(
  (props, ref) => {
    const { className, ...rest } = props
    const dispatch = useAppDispatch()
    const dataUserName = useSelector((state: AppRootStateType) => state.auth.dataUsers.name)
    const accountType = useSelector((state: AppRootStateType) => state.auth.dataUsers.accountType)
    const isAccountType = accountType === 'parent'
    const logOut = () => {
      //dispatch(authThunk.logout())
      dispatch(appActions.setAppStatus({ status: 'loading' }))
      const timeoutId = setTimeout(() => {
        dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }))
        dispatch(authActions.setChangeTypeAccount({ accountType: 'idle' }))
        dispatch(appActions.setAppStatus({ status: 'succeeded' }))
        dispatch(lessonsActions.setLessons({ lessons: {} }))
        clearTimeout(timeoutId)
      }, 1000) // задержка в 1 секунду как замена ответа с сервера чтобы показать весь flow
    }
    const onChangeProfile = (type: AccountType) => {
      // dispatch(accountTypeChangeTC(type))
      dispatch(appActions.setAppStatus({ status: 'loading' }))
      const timeoutId = setTimeout(() => {
        dispatch(authActions.setChangeTypeAccount({ accountType: type }))
        dispatch(appActions.setAppStatus({ status: 'succeeded' }))

        clearTimeout(timeoutId)
      }, 1000) // задержка в 1 секунду как замена ответа с сервера чтобы показать весь flow
    }

    return (
      <header className={classNames(s.container, className)} {...rest} ref={ref}>
        <Typography variant={'body3'}>
          Добро пожаловать,{' '}
          <span className={s.name}>
            {isAccountType ? dataUserName.parent : dataUserName.children}
          </span>
          !</Typography>
          <div className={s.containerInteractive}>
              <div className={s.messages}>
                  <Messages/>
              </div>
              <UserDropdown accountTypeChange={onChangeProfile} onSelectLogOut={logOut}/>
          </div>
      </header>
    )
  }
)

Header.displayName = 'Header'
