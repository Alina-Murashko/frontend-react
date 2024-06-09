import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId, useState } from 'react'

import classNames from 'classnames'

import s from './input.module.scss'

import { Typography } from '../typography/Typography'
export enum InputType {
  password = 'password',
  text = 'text',
}

type Props = {
  errorMessage?: null | string
  iconEnd?: ReactNode
  iconEndNotActive?: ReactNode
  label?: string
  type: InputType
}

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, keyof Props> & Props

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    errorMessage,
    iconEnd,
    iconEndNotActive,
    id,
    label,
    type,
    ...inputProps
  } = props

  const [active, setActive] = useState(false)

  const genID = useId()
  const finalId = id || genID
  const baseTypeInput = active || type === InputType.text ? InputType.text : InputType.password
  const onClickHandler = () => {
    setActive(prev => !prev)
  }

  return (
    <div className={s.box}>
      <div className={s.inputContainer}>
        <input
          className={classNames(s.input, errorMessage ? s.error : '', className)}
          disabled={disabled}
          id={finalId}
          ref={ref}
          type={baseTypeInput}
          {...inputProps}
        />
        <button className={s.icon} onClick={onClickHandler} type={'button'}>
          {active ? iconEnd : iconEndNotActive}
        </button>
      </div>
      {Boolean(errorMessage) && (
        <Typography as={'span'} className={s.error} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})

Input.displayName = 'Input'
