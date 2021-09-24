const { cartFormatError } = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      cartFormatError.result = err
      return ctx.app.emit('error', cartFormatError, ctx)
    }

    await next()
  }
}
module.exports = {
  validator,
}
