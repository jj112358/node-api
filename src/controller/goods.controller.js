const path = require('path')

const { fileUploadError } = require('../constant/err.type')
class GoodsController {
  async upload(ctx, next) {
    // console.log(ctx.request.files)
    const { file } = ctx.request.files
    if (file) {
      ctx.body = {
        code: 0,
        message: '商品图片上传成功',
        result: {
          goods_img: path.basename(file.path),
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
}

module.exports = new GoodsController()
