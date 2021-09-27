const { orderFormatError } = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      orderFormatError.result = err
      return ctx.app.emit('error', orderFormatError, ctx)
    }
    await next()
  }
}

module.exports = {
  validator,
}
