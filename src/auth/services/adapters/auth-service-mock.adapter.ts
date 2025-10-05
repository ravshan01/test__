import { injectable } from 'inversify'

import type { IAuthService } from '@/auth/services/ports/auth-service.port.ts'
import { simpleFaker } from '@faker-js/faker'

@injectable()
export class AuthServiceMockAdapter implements IAuthService {
  async login() {
    await new Promise((r) => setTimeout(r, 1000))

    const success = simpleFaker.datatype.boolean()
    if (!success) throw new Error('Incorrect login or password')
  }

  async twoFAConfirm() {
    await new Promise((r) => setTimeout(r, 1000))

    const success = simpleFaker.datatype.boolean()
    if (!success) throw new Error('Incorrect 2FA code')
  }
}
