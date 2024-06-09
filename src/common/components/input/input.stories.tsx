import { Meta, StoryObj } from '@storybook/react'

import EyeOffOutline from '../../../assets/icons/EyeOffOutline'
import EyeOutline from '../../../assets/icons/EyeOutline'
import { Input } from './Input'

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const InputStory = {
  args: {
    iconEnd: <EyeOutline />,
    iconEndNotActive: <EyeOffOutline />,
  },
} satisfies Story

export const InputStoryError = {
  args: {
    errorMessage: 'Error!',
    iconEnd: <EyeOutline />,
    iconEndNotActive: <EyeOffOutline />,
  },
} satisfies Story
