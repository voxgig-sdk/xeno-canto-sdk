
import { Context } from './Context'


class XenoCantoError extends Error {

  isXenoCantoError = true

  sdk = 'XenoCanto'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  XenoCantoError
}

