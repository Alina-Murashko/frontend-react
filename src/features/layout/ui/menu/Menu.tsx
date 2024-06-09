import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

import s from './menu.module.scss'

import image from '../../../../assets/gift2.png'
import Achievements from '../../../../assets/icons/Achievements'
import Calendar from '../../../../assets/icons/Calendar'
import Connection from '../../../../assets/icons/Connection'
import Folder from '../../../../assets/icons/Folder'
import Home from '../../../../assets/icons/Home'
import Puzzle from '../../../../assets/icons/Puzzle'
import Qushion from '../../../../assets/icons/Qushion'
import Setting from '../../../../assets/icons/Setting'
import Wallet from '../../../../assets/icons/Wallet'
import logo from '../../../../assets/logoMenu.png'
import { Button } from '../../../../common/components/button/Button'
import { Typography } from '../../../../common/components/typography/Typography'
import { NavLinkMenu } from './ui/NavLinkMenu'

export const Menu = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>((props, ref) => {
  return (
    <div className={s.container} ref={ref} {...props}>
      <img alt={'logo'} className={s.logo} src={logo} />
      <ul>
        <NavLinkMenu to={'homePage'}>
          <Home />
          Главная
        </NavLinkMenu>
        <NavLinkMenu to={'lessons'}>
          <Calendar />
          Расписание
        </NavLinkMenu>
        <NavLinkMenu to={'wallet'}>
          <Wallet />
          Оплата
        </NavLinkMenu>
        <NavLinkMenu to={'achievements'}>
          <Achievements />
          Достижения
        </NavLinkMenu>
        <NavLinkMenu to={'pazzle'}>
          <Puzzle />
          Тренажеры
        </NavLinkMenu>
        <NavLinkMenu to={'folder'}>
          <Folder />
          Библиотека
        </NavLinkMenu>
        <NavLinkMenu to={'connection'}>
          <Connection />
          Проверка связи
        </NavLinkMenu>
        <NavLinkMenu to={'setting'}>
          <Setting />
          Настройки
        </NavLinkMenu>
        <NavLinkMenu to={'queshion'}>
          <Qushion />
          Вопросы
        </NavLinkMenu>
      </ul>
      <div className={s.containerText}>
        <div className={s.text}>
          <Typography variant={'subtitle1'}>Учитесь бесплатно</Typography>
          <Typography variant={'subtitle3'}>
            Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!
          </Typography>
        </div>
        <Button as={NavLink} className={s.buttonMenu} to={'#'} variant={'secondary'}>
          Узнать?
        </Button>
        <img alt={''} className={s.img} src={image} />
      </div>
    </div>
  )
})
