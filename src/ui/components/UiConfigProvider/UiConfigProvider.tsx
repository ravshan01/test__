import type { PropsWithChildren } from 'react'
import enLocale from 'antd/locale/en_US'
import { App, ConfigProvider } from 'antd'

export function UiConfigProvider(props: IUiConfigProviderProps) {
  const { children } = props

  return (
    <ConfigProvider locale={enLocale}>
      <App>{children}</App>
    </ConfigProvider>
  )
}

export interface IUiConfigProviderProps extends PropsWithChildren {}
