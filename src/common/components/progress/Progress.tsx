import React, { useEffect } from 'react'

import * as Progress from '@radix-ui/react-progress'

import s from './progress.module.scss'

export const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress.Root className={s.progressRoot} value={progress}>
      <Progress.Indicator
        className={s.progressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}
