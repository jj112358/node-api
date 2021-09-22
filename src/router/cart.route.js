// 1. 导入koa-router
const Router = require('koa-router')

// 中间件
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/cart.middleware')

// 控件器

// 2. 实例化router对象
const router = new Router({ prefix: '/carts' })

// 3. 编写路由规则

// 3.1 添加到购物车接口: 登录, 格式
router.post('/', auth, validator, (ctx) => {
  ctx.body = ctx.state.user
})

// 4. 导出router对象
module.exports = router
