import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'

import { LessonType, Lessons } from '../../app/api/api'
import { dayMonthLesson } from './month-data'

type Status = 'notAvailable' | 'pay' | 'stroke' | 'success'

const generateLesson = (): LessonType => ({
  date: ['13.00', '13.45'],
  id: v4(),
  pay: faker.datatype.boolean(),
  status: faker.helpers.arrayElement<Status>(['success', 'stroke', 'pay', 'notAvailable']),
  title: 'Ментальная арифметика',
})

const generateLessons = (daysInMonth: (Date | undefined)[]): Lessons => {
  return daysInMonth.reduce((lessons: Lessons, day) => {
    if (day) {
      lessons[day.getDate()] = [generateLesson(), generateLesson()]
    }

    return lessons
  }, {})
}

export const lessonsData = generateLessons(dayMonthLesson)
