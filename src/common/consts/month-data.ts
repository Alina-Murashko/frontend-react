export const week = ['Пн', 'Вт', 'Cр', 'Чт', 'Пт', 'Cб', 'Вс']
const daysInWeek = 7

const daysInMonthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const weekDaysFromMonday = [6, 0, 1, 2, 3, 4, 5]

export enum months {
  April = 3,
  August = 7,
  December = 11,
  February = 1,
  January = 0,
  July = 6,
  June = 5,
  March = 2,
  May = 4,
  November = 10,
  October = 9,
  September = 8,
}

export function areEqual(a: Date, b: Date) {
  if (!a || !b) {
    return false
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isLeapYear(year: number) {
  return !(year % 4 || (!(year % 100) && year % 400))
}

export function getDaysInMonth(date: Date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  const daysInMonth = daysInMonthArr[month]

  if (isLeapYear(year) && month === months.February) {
    return daysInMonth + 1
  } else {
    return daysInMonth
  }
}

export function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay()

  return weekDaysFromMonday[dayOfWeek]
}

export function getMonthData(year: number, month: number) {
  const result: (Date | undefined)[][] = []
  const date = new Date(year, month)
  const datePrev = new Date(year, month - 1)
  const daysInMonth = getDaysInMonth(date)
  const monthStartsOn = getDayOfWeek(date)
  let day = 1
  const daysInPrevMonth = getDaysInMonth(datePrev)
  let prevMonthDay = daysInPrevMonth - (monthStartsOn - 1)

  for (let i = 0; i < Math.ceil((daysInMonth + monthStartsOn) / daysInWeek); i++) {
    result[i] = []

    for (let j = 0; j < daysInWeek; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = new Date(year, month - 1, prevMonthDay++)
      } else {
        result[i][j] = new Date(year, month, day++)
      }
    }
  }

  return result
}

const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear()

export const weeksInMonth = getMonthData(currentYear, currentMonth)

export const dayMonthLesson = weeksInMonth.flat()
