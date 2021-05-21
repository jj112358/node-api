const Koa = require('koa')
const KoaBody = require('koa-body')

const userRouter = require('../router/user.route')

const app = new Koa()

app.use(KoaBody())
app.use(userRouter.routes())

module.exports = app
