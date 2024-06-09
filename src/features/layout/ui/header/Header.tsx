import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import classNames from 'classnames'

import s from './header.module.scss'

import { AccountType } from '../../../../app/api/api'
import { authActions, logoutTC } from '../../../../app/auth/auth.reducer'
import { AppRootStateType } from '../../../../app/store'
import UserDropdown from '../../../../common/components/dropdown/userDropdown/UserDropdown'
import { Typography } from '../../../../common/components/typography/Typography'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'

export const Header = forwardRef<ElementRef<'header'>, ComponentPropsWithoutRef<'header'>>(
  (props, ref) => {
    const { className, ...rest } = props
    const dispatch = useAppDispatch()
    const dataUserName = useSelector((state: AppRootStateType) => state.auth.dataUsers.name)
    const accountType = useSelector((state: AppRootStateType) => state.auth.dataUsers.accountType)
    const logOut = () => {
      //dispatch(logoutTC())
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }))
      dispatch(authActions.setChangeTypeAccount({ accountType: 'idle' }))
    }
    const onChangeProfile = (type: AccountType) => {
      // dispatch(accountTypeChangeTC(type))
      dispatch(authActions.setChangeTypeAccount({ accountType: type }))
    }

    return (
      <header className={classNames(s.container, className)} {...rest} ref={ref}>
        <Typography variant={'body3'}>
          Добро пожаловать,{' '}
          <span className={s.name}>
            {accountType === 'parent' ? dataUserName.parent : dataUserName.children}
          </span>
          !
        </Typography>
        <UserDropdown accountTypeChange={onChangeProfile} onSelectLogOut={logOut} />
      </header>
    )
  }
)

Header.displayName = 'Header'
