import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

const label = 'Checkbox-box'

export const CheckboxChecked = {
  args: {
    checked: true,
  },
} satisfies Story

export const CheckboxNotChecked = {
  args: {
    checked: false,
    label: label,
  },
} satisfies Story

export const CheckboxToggles = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = () => setChecked(!checked)

    return <Checkbox checked={checked} onCheckedChange={onChangeHandler} />
  },
} satisfies Story
