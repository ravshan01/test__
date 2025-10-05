import type { PropsWithChildren } from 'react'

import { App, ConfigProvider } from 'antd'
import enLocale from 'antd/locale/en_US'

import { ANTD_THEME_CONFIG } from '@/ui/components/UiConfigProvider/config/antd-theme.config.ts'

export function UiConfigProvider(props: IUiConfigProviderProps) {
  const { children } = props

  return (
    <ConfigProvider locale={enLocale} theme={ANTD_THEME_CONFIG}>
      <App>{children}</App>
    </ConfigProvider>
  )
}

export interface IUiConfigProviderProps extends PropsWithChildren {}
