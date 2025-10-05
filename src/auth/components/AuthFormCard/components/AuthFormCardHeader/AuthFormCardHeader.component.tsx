import cn from 'classnames'
import { type HTMLAttributes } from 'react'

import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import styles from './AuthFormCardHeader.module.sass'
import { LogoWithTextImage } from '@/common/images'

export function AuthFormCardHeader(props: IAuthFormCardHeaderProps) {
  const { className, hasPrevButton = false, onPrev } = props
  const rootClass = cn(styles.root, className)

  return (
    <div className={rootClass}>
      {hasPrevButton && (
        <Button
          className={styles.prev}
          icon={<ArrowLeftOutlined />}
          type="text"
          size="large"
          onClick={onPrev}
        />
      )}

      <img className={styles.logo} src={LogoWithTextImage} alt="logo" />
    </div>
  )
}

export interface IAuthFormCardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  hasPrevButton?: boolean
  onPrev?(): void
}
