import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app/components/App'
import { IOC } from './ioc/ioc.ts'

IOC.init()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
