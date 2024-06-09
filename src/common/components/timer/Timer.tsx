import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'

import s from './timer.module.scss'

import { Typography } from '../typography/Typography'

type PropsType = {
  date: Date
} & ComponentPropsWithoutRef<'div'>
export const Timer = ({ date }: PropsType) => {
  const [finishTime] = useState(date.getTime())
  const [[diffDays, diffH, diffM], setDiff] = useState([0, 0, 0, 0])
  const [tick, setTick] = useState(false)

  useEffect(() => {
    const diff = (finishTime - new Date().getTime()) / 1000

    if (diff < 0) {
      return
    } // время вышло
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ])
  }, [tick, finishTime])

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000)

    return () => clearInterval(timerID)
  }, [tick])

  return (
    <Typography className={s.container} variant={'body1'}>
      {diffDays}
      <span>д</span>
      {diffH.toString()}
      <span>ч</span>
      {diffM.toString()}
      <span>мин</span>
    </Typography>
  )
}
