import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from './userAvatar.module.scss'

type Props = {
  src?: string
} & ComponentPropsWithoutRef<'div'>
export const UserAvatar = forwardRef<ElementRef<'div'>, Props>(
  ({ className, src, ...rest }, ref) => {
    return (
      <div className={classNames(s.container, className)} ref={ref} {...rest}>
        <img alt={'User'} className={s.img} src={src} />
      </div>
    )
  }
)

UserAvatar.displayName = 'UserAvatar'
