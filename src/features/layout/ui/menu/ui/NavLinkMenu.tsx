import { ComponentPropsWithoutRef } from 'react'
import { NavLink } from 'react-router-dom'

import classNames from 'classnames'

import s from '../menu.module.scss'

export const NavLinkMenu = (props: { to: string } & ComponentPropsWithoutRef<'li'>) => {
  const { children, to, ...rest } = props

  return (
    <li className={s.li} {...rest}>
      <NavLink
        className={({ isActive }) => (isActive ? classNames(s.link, s.active) : s.link)}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  )
}
