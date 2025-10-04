import { Container } from 'inversify'

import type { DIRegisterFunc } from './types/register-func.type.ts'

export class IOC {
  static container = new Container()

  static init() {
    const modules = import.meta.glob('@/**/*.di.ts', { eager: true })
    
    Object.values(modules).forEach((module) => {
      const mod = module as { register?: DIRegisterFunc }
      if (mod.register) mod.register(this.container)
    })
  }
}
