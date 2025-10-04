import type {
  IAuth2FactorConfirmDTO,
  IAuthLoginDTO,
} from '../../dto/auth.dto.ts'

export interface IAuthService {
  login(dto: IAuthLoginDTO): Promise<void>
  TwoFactorConfirm(dto: IAuth2FactorConfirmDTO): Promise<void>
}

export const AUTH_SERVICE_KEY = Symbol('AUTH_SERVICE_KEY')
