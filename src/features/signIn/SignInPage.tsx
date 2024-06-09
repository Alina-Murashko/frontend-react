import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { authActions, loginTC } from '../../app/auth/auth.reducer'
import { AppRootStateType } from '../../app/store'
import { userData } from '../../common/consts/user-data'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { FormSignIn, SignIn } from './FormSignIn'

export const SignInPage = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector((state: AppRootStateType) => state.auth.isLoggedIn)

  const onSubmit = (data: SignIn) => {
    //dispatch(loginTC(data))

    dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
    dispatch(authActions.setAddDataUser({ dataUser: userData }))
    dispatch(authActions.setChangeTypeAccount({ accountType: 'parent' }))
  }

  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <FormSignIn onSubmit={onSubmit} />
    </div>
  )
}
