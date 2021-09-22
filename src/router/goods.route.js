const Router = require('koa-router')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const {
  upload,
  create,
  update,
  remove,
  restore,
  findAll,
} = require('../controller/goods.controller')

const router = new Router({ prefix: '/goods' })

// 商品图片上传接口
router.post('/upload', auth, hadAdminPermission, upload)

// 发布商品接口
router.post('/', auth, hadAdminPermission, validator, create)

// 修改商品接口
router.put('/:id', auth, hadAdminPermission, validator, update)

// 硬删除接口
// router.delete('/:id', auth, hadAdminPermission, remove)

router.post('/:id/off', auth, hadAdminPermission, remove)
router.post('/:id/on', auth, hadAdminPermission, restore)

// 获取商品列表
router.get('/', findAll)

module.exports = router
