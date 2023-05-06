import { GlobalStyles } from 'twin.macro'
import type { Preview } from '@storybook/react'
import React from 'react'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

export default preview
