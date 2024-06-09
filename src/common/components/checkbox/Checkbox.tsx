import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import classNames from 'classnames'

import s from './checkbox.module.scss'

import CheckboxIcon from '../../../assets/icons/CheckboxIcon'
import { Typography } from '../typography/Typography'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, className, disabled, id, label, ...rest } = props
    const genID = useId()
    const finalId = id || genID

    return (
      <div className={classNames(s.container, className)}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkboxRoot}
          disabled={disabled}
          id={finalId}
          ref={ref}
          {...rest}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator}>
            <CheckboxIcon className={s.icon} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {Boolean(label) && (
          <Typography as={'label'} className={s.label} htmlFor={finalId} variant={'subtitle2'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
