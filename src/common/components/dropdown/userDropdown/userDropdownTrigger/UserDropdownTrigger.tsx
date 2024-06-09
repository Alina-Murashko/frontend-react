import { ComponentPropsWithoutRef } from 'react'

import classNames from 'classnames'

import s from './userDropdownTrigger.module.scss'

import TriggerOpen from '../../../../../assets/icons/TriggerOpen'
import { UserAvatar } from '../../../userAvatar/UserAvatar'

type Props = {
  src?: string
} & ComponentPropsWithoutRef<'div'>

export const UserDropdownTrigger = ({ className, src, ...rest }: Props) => {
  return (
    <div className={classNames(s.container, classNames)} {...rest}>
      <UserAvatar src={src} />
      <TriggerOpen />
    </div>
  )
}

UserDropdownTrigger.displayName = 'UserDropdownTrigger'
