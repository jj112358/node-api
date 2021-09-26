// 一. 导入koa-router包
const Router = require('koa-router')

// 二. 实例化对象
const router = new Router({ prefix: '/address' })

// 中间件/控制器
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/addr.middleware')

// 三. 编写路由规则
// 3.1 添加接口: 登录, 格式
router.post(
  '/',
  auth,
  validator({
    consignee: 'string',
    phone: { type: 'string', format: /^1\d{10}$/ },
    address: 'string',
  }),
  (ctx) => {
    console.log(ctx.state.user.id)
    ctx.body = '添加地址成功'
  }
)

// 四. 导出router对象
module.exports = router
