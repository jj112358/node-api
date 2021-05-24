const Router = require('koa-router')

const { userValidator, verifyUser } = require('../middleware/user.middleware')
const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, register)

// 登录接口
router.post('/login', login)

module.exports = router
