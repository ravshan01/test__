import type { ThemeConfig } from 'antd'

import { COLOR_PRIMARY } from '@/ui/config/variables/base-variables.config.ts'

export const ANTD_THEME_CONFIG: ThemeConfig = {
  cssVar: true,
  hashed: false,
  token: {
    colorPrimary: COLOR_PRIMARY,
  },
}
