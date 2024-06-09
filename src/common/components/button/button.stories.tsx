import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
} satisfies Story
export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
} satisfies Story

export const Transparent = {
  args: {
    children: 'Button',
    variant: 'transparent',
  },
} satisfies Story
export const FullWidth = {
  args: {
    children: 'Button',
    fullWidth: true,
    variant: 'primary',
  },
} satisfies Story
