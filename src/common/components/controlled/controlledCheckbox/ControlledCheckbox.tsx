import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox/Checkbox'

type ControlledCheckboxProps<T extends FieldValues> = Omit<CheckboxProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return <Checkbox {...{ checked: value, id: name, onCheckedChange: onChange, ...checkboxProps }} />
}

ControlledCheckbox.displayName = 'ControlledCheckbox'
