import cn from 'classnames'
import type { HTMLAttributes } from 'react'

import { Typography } from 'antd'

import { useAuthFormCardTitleDescription } from '@/auth/components/AuthFormCard/hooks/use-auth-form-card-title-description.hook.ts'

import styles from './AuthFormCardSubHeader.module.sass'

export function AuthFormCardSubHeader(props: IAuthFormCardSubHeaderProps) {
  const { className, step, ...rest } = props
  const rootClass = cn(styles.root, className)

  const { title, description } = useAuthFormCardTitleDescription(step)

  return (
    <div className={rootClass} {...rest}>
      <Typography.Title className={styles.title} level={3}>
        {title}
      </Typography.Title>
      <Typography.Text className={styles.description}>
        {description}
      </Typography.Text>
    </div>
  )
}

export interface IAuthFormCardSubHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  step: 'login' | '2fa'
}
