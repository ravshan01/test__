import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@ant-design/v5-patch-for-react-19'

import { App } from './app/components/App'
import { IOC } from './ioc/ioc.ts'

IOC.init()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
