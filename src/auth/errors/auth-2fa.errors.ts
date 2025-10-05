export class Auth2FAInvalidCodeError extends Error {
  constructor(_: string, options?: ErrorOptions) {
    super('The provided 2FA code is invalid.', options)
  }
}

export class Auth2FAExpiredCodeError extends Error {
  constructor(_: string, options?: ErrorOptions) {
    super('The provided 2FA code has expired.', options)
  }
}
