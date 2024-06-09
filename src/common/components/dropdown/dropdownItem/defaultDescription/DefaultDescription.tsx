import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from './defaultDescription.module.scss'

import { Typography } from '../../../typography/Typography'

type Props = ComponentPropsWithoutRef<'span'>
export const DefaultDescription = forwardRef<ElementRef<'span'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <Typography as={'span'} className={classNames(s.container, className)} ref={ref} {...rest}>
      {children}
    </Typography>
  )
})

DefaultDescription.displayName = 'DefaultDescription'
