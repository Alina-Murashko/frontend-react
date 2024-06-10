import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { appActions } from '../../app/app.reducer'
import { authActions, authThunk } from '../../app/auth/auth.reducer'
import { AppRootStateType } from '../../app/store'
import { userData } from '../../common/consts/user-data'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { FormSignIn, SignIn } from './ui/FormSignIn'

export const SignInPage = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector((state: AppRootStateType) => state.auth.isLoggedIn)

  const onSubmit = (data: SignIn) => {
    //dispatch(authThunk.login(data))
    dispatch(appActions.setAppStatus({ status: 'loading' }))
    const timeoutId = setTimeout(() => {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
      dispatch(authActions.setAddDataUser({ dataUser: userData }))
      dispatch(authActions.setChangeTypeAccount({ accountType: 'parent' }))
      dispatch(appActions.setAppStatus({ status: 'succeeded' }))

      clearTimeout(timeoutId)
    }, 1000) // задержка 1 секунда как замена ответа с сервера чтобы показать весь flow
  }

  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return <FormSignIn onSubmit={onSubmit} />
}
