import { UiConfigProvider } from '@/ui/components/UiConfigProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '../../styles/index.styles.sass'
import './App.module.sass'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UiConfigProvider>
        <div></div>
      </UiConfigProvider>
    </QueryClientProvider>
  )
}
