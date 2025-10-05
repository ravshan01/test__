import type { IAuth2FAConfirmDTO, IAuthLoginDTO } from '../../dto/auth.dto.ts'

export interface IAuthService {
  login(dto: IAuthLoginDTO): Promise<void>
  twoFAConfirm(dto: IAuth2FAConfirmDTO): Promise<void>
}

export const AUTH_SERVICE_KEY = Symbol('AUTH_SERVICE_KEY')
