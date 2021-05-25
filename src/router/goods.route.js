const Router = require('koa-router')

const { upload } = require('../controller/goods.controller')

const router = new Router({ prefix: '/goods' })

router.post('/upload', upload)

module.exports = router
