import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './formSignIn.module.scss'

import EyeOffOutline from '../../../assets/icons/EyeOffOutline'
import EyeOutline from '../../../assets/icons/EyeOutline'
import logo from '../../../assets/logo.png'
import { Button } from '../../../common/components/button/Button'
import { Card } from '../../../common/components/card/Card'
import { ControlledCheckbox } from '../../../common/components/controlled/controlledCheckbox/ControlledCheckbox'
import { ControlledInput } from '../../../common/components/controlled/controlledInput/ControlledInput'
import { InputType } from '../../../common/components/input/Input'
import { Typography } from '../../../common/components/typography/Typography'
import { emailSchema, passwordSchema } from '../../../common/components/utils/zodSchema'

type Props = {
  onSubmit: (data: SignIn) => void
}

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})

export type SignIn = z.infer<typeof loginSchema>
export const FormSignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignIn>({ resolver: zodResolver(loginSchema) })
  const formId = useId()

  return (
    <Card className={s.card}>
      <img alt={'logo'} className={s.logo} src={logo} />
      <Typography as={'h1'} variant={'body1'}>
        Вход в Sirius Future
      </Typography>
      <form className={s.form} id={formId} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.containerInput}>
          <ControlledInput
            autoFocus
            control={control}
            name={'email'}
            placeholder={'E-mail'}
            type={InputType.text}
          />
          <ControlledInput
            control={control}
            iconEnd={<EyeOffOutline />}
            iconEndNotActive={<EyeOutline />}
            name={'password'}
            placeholder={'Пароль'}
            type={InputType.password}
          />
        </div>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Запомнить меня'}
          name={'rememberMe'}
        />
        <Button form={formId} fullWidth>
          Войти
        </Button>
      </form>
      <div className={s.linkContainer}>
        <Typography as={'a'} className={s.link} href={'#'} variant={'link'}>
          Я забыл пароль
        </Typography>
        <Typography as={'a'} className={s.link} href={'#'} variant={'link'}>
          Войти как тренер
        </Typography>
      </div>
      <div className={s.registrationContainer}>
        <Typography as={'h2'} className={s.registration} variant={'subtitle1'}>
          Нет аккаунта?
        </Typography>
        <Typography as={'a'} className={s.link} href={'#'} variant={'link'}>
          Зарегистироваться?
        </Typography>
      </div>
    </Card>
  )
}

FormSignIn.displayName = 'FormSignIn'
