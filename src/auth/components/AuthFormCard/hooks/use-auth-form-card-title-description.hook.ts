import { useMemo } from 'react'

export function useAuthFormCardTitleDescription(step: 'login' | '2fa') {
  const title = useMemo(
    () =>
      step === 'login'
        ? 'Sign in to your account to continue'
        : 'Two-Factor Authentication',
    [step]
  )
  const description = useMemo(
    () =>
      step === 'login'
        ? null
        : 'Enter the 6-digit code from the Google Authenticator app',
    [step]
  )

  return useMemo(() => ({ title, description }), [title, description])
}
