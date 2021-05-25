const Router = require('koa-router')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')

const { upload } = require('../controller/goods.controller')

const router = new Router({ prefix: '/goods' })

router.post('/upload', auth, hadAdminPermission, upload)

module.exports = router
