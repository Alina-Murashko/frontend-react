import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

import classNames from 'classnames'

import s from './lesson.module.scss'

import { LessonType } from '../../../../app/api/api'
import Money from '../../../../assets/icons/Money'
import { Typography } from '../../typography/Typography'

type LessonProps = {
  data: LessonType
} & ComponentPropsWithoutRef<'div'>
export const Lesson = forwardRef<ElementRef<'div'>, LessonProps>((props, ref) => {
  const { className, data } = props

  const statusStyles = {
    notAvailable: 'not-available',
    pay: 'pay',
    stroke: 'stroke',
    success: 'success',
  }

  const status = data.status // пример значения статуса

  const statusClassName = statusStyles[status] || ''

  const timeLesson = `${data.date[0]} - ${data.date[1]}`

  return (
    <div className={classNames(s.container, s[statusClassName], className)} ref={ref}>
      {data.pay ? (
        <NavLink className={s.link} to={'#'}>
          <div>
            <Money className={s.icon} />
            <Typography variant={'subtitle2'}>{timeLesson}</Typography>
          </div>
          <Typography variant={'subtitle3'}>{data.title}</Typography>
        </NavLink>
      ) : (
        <>
          <Typography variant={'subtitle2'}>{timeLesson}</Typography>
          <Typography variant={'subtitle3'}>{data.title}</Typography>
        </>
      )}
    </div>
  )
})

Lesson.displayName = 'Lesson'
