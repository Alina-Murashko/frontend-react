import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'

export type TextProps<T extends ElementType> = {
  as?: T
  variant?:
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'error'
    | 'link'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
} & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

function TypographyPolymorph<T extends ElementType = 'p'>(
  props: TextProps<T>,
  ref: PolymorphicRef<T>
) {
  const { as: Component = 'p', className, variant = 'subtitle1', ...restProps } = props

  return <Component className={classNames(s[variant], className)} ref={ref} {...restProps} />
}

export const Typography = forwardRef(TypographyPolymorph) as <T extends ElementType = 'p'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> &
    TextProps<T>
) => ReturnType<typeof TypographyPolymorph>
