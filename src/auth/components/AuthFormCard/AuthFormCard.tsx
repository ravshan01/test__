import cn from 'classnames'

import { Card, type CardProps } from 'antd'

import styles from './AuthFormCard.module.sass'

export function AuthFormCard(props: IAuthFormCardProps) {
  const { className, classNames, children, ...rest } = props
  const rootClass = cn(styles.root, className)
  const classes: CardProps['classNames'] = { ...classNames }

  return (
    <Card className={rootClass} classNames={classes} {...rest}>
      {children}
    </Card>
  )
}

export interface IAuthFormCardProps extends CardProps {}
