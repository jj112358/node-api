const { invalidGoodsID } = require('../constant/err.type')

const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_id: 'number',
    })
  } catch (err) {
    console.error(err)
    invalidGoodsID.result = err
    return ctx.app.emit('error', invalidGoodsID, ctx)
  }

  await next()
}
module.exports = {
  validator,
}
