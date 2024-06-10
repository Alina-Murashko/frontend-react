import { NavLink } from 'react-router-dom'

import classNames from 'classnames'

import s from './homePage.module.scss'

import image from '../../assets/gift.png'
import Profile from '../../assets/icons/Profile'
import { Button } from '../../common/components/button/Button'
import { Card } from '../../common/components/card/Card'
import { Table, Td, Th, Thead, Tr } from '../../common/components/tables/Tables'
import { Timer } from '../../common/components/timer/Timer'
import { Typography } from '../../common/components/typography/Typography'
import { lessonsBalance, lessonsRecord } from '../../common/consts/home-page'
export const HomePage = () => {
  const formatterMonth = new Intl.DateTimeFormat('ru', {
    month: 'long',
  })

  const finishTime = '2024-06-30T16:25:00.000Z'
  const finishDate = new Date(finishTime)

  return (
    <section className={s.gridContainer}>
      <div className={s.flexContainer}>
        <Card className={s.cardOffer}>
          <Typography className={s.cardOffer__title} variant={'body2'}>
            До 31 декабря любой курс со скидкой 20%
          </Typography>
          <Typography className={s.cardOffer__text} variant={'subtitle1'}>
            До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой
            20% на любой курс!
          </Typography>
          <img alt={''} className={s.img} src={image} />
        </Card>
        <Card className={s.cardTimer}>
          <Typography className={s.cardTimer__text} variant={'body4'}>
            Следующее занятие начнется через:
          </Typography>
          <Timer date={finishDate} />
          <Button as={NavLink} className={s.cardTimer__button} to={'#'} variant={'secondary'}>
            Button
          </Button>
        </Card>
      </div>
      <div className={s.flexContainer}>
        <Card className={s.cardTable}>
          <Typography variant={'body3'}>Баланс занятий </Typography>
          <div>
            <Table>
              <Thead>
                {lessonsBalance.map((lesson, id) => {
                  return (
                    <Tr key={`${lesson.lesson}_${id}`}>
                      <Th>
                        <Typography variant={'subtitle1'}>{lesson.lesson}</Typography>
                      </Th>
                      <Td>
                        <Typography className={s.balance} variant={'subtitle1'}>
                          {lesson.balance}
                        </Typography>
                      </Td>
                    </Tr>
                  )
                })}
              </Thead>
            </Table>
          </div>
          <Button as={NavLink} className={s.buttonTable} to={'#'} variant={'secondary'}>
            Button
          </Button>
        </Card>
        <Card className={classNames(s.cardTable, s.cardLessons)}>
          <Typography variant={'body3'}>Ближайшие уроки</Typography>
          <div>
            <Table>
              {lessonsRecord.map((lesson, id) => {
                return (
                  <Tr key={`${lesson.lesson}_${id}`}>
                    <Th className={s.dataTable}>
                      <Typography variant={'body2'}>{lesson.data.getDate()}</Typography>
                      <Typography as={'span'} className={s.data} variant={'subtitle2'}>
                        {formatterMonth.format(lesson.data)}
                      </Typography>
                    </Th>
                    <Td>
                      <Typography variant={'subtitle1'}>{lesson.lesson}</Typography>
                    </Td>
                    <Td>
                      <Typography variant={'subtitle2'}>{lesson.time}</Typography>
                    </Td>
                    <Td>
                      <NavLink className={s.avatar} to={'#'}>
                        <Profile />
                        <Typography className={s.cardLessons__text} variant={'subtitle2'}>
                          {lesson.teacher}
                        </Typography>
                      </NavLink>
                    </Td>
                    <Td>
                      <div className={s.containerButton}>
                        <Button className={s.button} variant={'transparent'}>
                          Button
                        </Button>
                        <Button className={s.button}>Button</Button>
                      </div>
                    </Td>
                  </Tr>
                )
              })}
            </Table>
          </div>
          <Button as={NavLink} className={s.buttonTable} to={'#'} variant={'secondary'}>
            Button
          </Button>
        </Card>
      </div>
    </section>
  )
}
