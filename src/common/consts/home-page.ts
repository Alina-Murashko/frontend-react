import { months } from './month-data'

export const lessonsRecord = [
  {
    data: new Date(2024, months.May - 1, 1),
    lesson: 'Ментальная Арифметика',
    teacher: 'Белкина Инна',
    time: '14.00-14.25',
  },
  {
    data: new Date(2024, months.May - 1, 30),
    lesson: 'Ментальная Арифметика',
    teacher: 'Животновская Оксана',
    time: '14.00-14.25',
  },
  {
    balance: 0,
    data: new Date(2024, months.May - 1, 1),
    lesson: 'Шахматы',
    teacher: 'Мин Елена',
    time: '15.00-16.25',
  },
  {
    balance: 11,
    data: new Date(2024, months.May - 1, 1),
    lesson: 'Скорочтение',
    teacher: 'Белкина Инна',
    time: '14.00-14.25',
  },
  {
    balance: 3,
    data: new Date(2024, months.May - 1, 1),
    lesson: 'Английский язык',
    teacher: 'Животновская Оксана',
    time: '17.00-19.25',
  },
  {
    balance: 2,
    data: new Date(2024, months.May - 1, 1),
    lesson: 'Программирование',
    teacher: 'Белкина Инна',
    time: '11.00-12.25',
  },
]

export const lessonsBalance = [
  { balance: 32, lesson: 'Ментальная Арифметика' },
  { balance: 32, lesson: 'Ментальная Арифметика' },
  { balance: 0, lesson: 'Шахматы' },
  { balance: 11, lesson: 'Скорочтение' },
  { balance: 3, lesson: 'Английский язык' },
  { balance: 2, lesson: 'Программирование' },
]
