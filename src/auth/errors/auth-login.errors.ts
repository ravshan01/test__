export class AuthInvalidCredentialsError extends Error {
  constructor(_: string, options?: ErrorOptions) {
    super('The provided credentials are invalid.', options)
  }
}
