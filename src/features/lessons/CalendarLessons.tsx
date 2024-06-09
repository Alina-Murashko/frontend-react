import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import s from './сalendarLessons.module.scss'

import { lessonsActions, lessonsTC } from '../../app/lessons/lessons.reducer'
import { AppRootStateType } from '../../app/store'
import Back from '../../assets/icons/Back'
import Forward from '../../assets/icons/Forward'
import Qushion from '../../assets/icons/Qushion'
import { Button } from '../../common/components/button/Button'
import { Select } from '../../common/components/select/Select'
import { Table, Tbody, Td, Th, Thead, Tr } from '../../common/components/tables/Tables'
import { Lesson } from '../../common/components/tables/lesson/Lesson'
import { Typography } from '../../common/components/typography/Typography'
import { lessonsData } from '../../common/consts/lessons-data'
import { week, weeksInMonth } from '../../common/consts/month-data'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'

const options = [
  { label: 'Ментальная арифметика', value: 'mentalArithmetic' },
  { label: 'Шахматы', value: 'chess' },
  { label: 'Английский язык', value: 'english' },
]

export const CalendarLessons = () => {
  const lessons = useSelector((state: AppRootStateType) => state.lessons)
  const userId = useSelector((state: AppRootStateType) => state.auth.dataUsers.id)
  const dispatch = useAppDispatch()
  const [select, setSelect] = useState<string | undefined>(undefined)
  const navigate = useNavigate()

  const handleNavigateBack = (nav: number) => {
    navigate(-1)
  }

  useEffect(() => {
    // const currentMonth = new Date().getMonth().toString();
    // const currentYear = new Date().getFullYear().toString();

    //dispatch(lessonsTC({currentMonth, currentYear,select,userId}))
    dispatch(lessonsActions.setLessons({ lessons: lessonsData }))
  }, [dispatch, lessons, select, userId])

  return (
    <div className={s.container}>
      <div className={s.settings}>
        <Select onValueChange={setSelect} options={options} placeholder={'Выберите предмет'} />
        <Button as={NavLink} to={'#'} variant={'secondary'}>
          Изменить расписание
        </Button>
      </div>
      <div className={s.containerLink}>
        <div className={s.navMenu}>
          <Typography as={'a'} onClick={() => handleNavigateBack(-1)}>
            <Back />
          </Typography>
          <Typography className={s.month} variant={'subtitle1'}>
            {' '}
            Июнь 2024
          </Typography>
          <Typography as={'a'} onClick={() => handleNavigateBack(+1)}>
            <Forward />
          </Typography>
        </div>
        <Button as={NavLink} className={s.buttonLink} to={'#'} variant={'transparent'}>
          Сегодня
        </Button>
        <NavLink to={'#'}>
          <Qushion />
        </NavLink>
      </div>
      <Table>
        <Thead>
          <Tr>
            {week?.map((day, id) => {
              return <Th key={id}>{day}</Th>
            })}
          </Tr>
        </Thead>
        <Tbody>
          {weeksInMonth?.map((week: (Date | undefined)[], id) => {
            return (
              <Tr key={id}>
                {week.map((day, id) => {
                  const dayLessons = day?.getDate() ?? ''
                  const dataLessons = lessons[dayLessons]

                  return (
                    <Td key={id}>
                      <span className={s.day}>{day?.getDate()}</span>
                      <div className={s.containerContent}>
                        {dataLessons?.map(lesson => <Lesson data={lesson} key={lesson.id} />)}
                      </div>
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </div>
  )
}
