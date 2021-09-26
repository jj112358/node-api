// 一. 导入koa-router包
const Router = require('koa-router')

// 二. 实例化对象
const router = new Router({ prefix: '/address' })

// 中间件/控制器
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/addr.middleware')

const { create, findAll } = require('../controller/addr.controller')

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
  create
)

// 3.2 获取地址列表
router.get('/', auth, findAll)

// 四. 导出router对象
module.exports = router
