import type { Container } from 'inversify'

export interface DIRegisterFunc {
  (container: Container): void
}
