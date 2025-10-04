import type { Preview } from '@storybook/react-vite'

import '@ant-design/v5-patch-for-react-19'

import { IOC } from '../src/ioc/ioc'
import { UiConfigProvider } from '../src/ui/components/UiConfigProvider'

bootstrap()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: { method: 'alphabetical' },
    },
  },

  decorators: [
    (Story) => (
      <UiConfigProvider>
        <Story />
      </UiConfigProvider>
    ),
  ],
}

export default preview

function bootstrap() {
  IOC.init()
}
