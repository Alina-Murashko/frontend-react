import { ComponentPropsWithoutRef } from 'react'

import s from './preloader.module.scss'

import preloader from '../../../assets/preloader.svg'

type PreloaderPropsType = {
  style?: { [key: string]: string }
} & ComponentPropsWithoutRef<'img'>

export const Preloader = ({ style, ...rest }: PreloaderPropsType) => {
  return (
    <div className={s.container}>
      <img alt={'LOADING...'} className={s.setting} src={preloader} style={style} {...rest} />
    </div>
  )
}

Preloader.displayName = 'Preloader'
