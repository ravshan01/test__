import { AuthServiceMockAdapter } from '@/auth/services/adapters/auth-service-mock.adapter.ts'
import {
  AUTH_SERVICE_KEY,
  type IAuthService,
} from '@/auth/services/ports/auth-service.port.ts'
import type { DIRegisterFunc } from '@/ioc/types/register-func.type.ts'

export const register: DIRegisterFunc = (container) => {
  container
    .bind<IAuthService>(AUTH_SERVICE_KEY)
    .to(AuthServiceMockAdapter)
    .inSingletonScope()
}
