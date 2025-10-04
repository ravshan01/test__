import './App.module.sass'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UiConfigProvider } from '../../../ui/components/UiConfigProvider'

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
