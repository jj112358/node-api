# 一. 项目的初始化

## 1 npm初始化

```
npm init -y
```

生成`package.json`文件:

- 记录项目的依赖

## 2 git初始化

```
git init
```

生成'.git'隐藏文件夹, git的本地仓库

## 3 创建ReadMe文件

# 二. 搭建项目

## 1 安装Koa框架

```
npm install koa
```

## 2 编写最基本的app

创建`src/main.js`

```js
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})
```

## 3 测试

在终端, 使用`node src/main.js`

![image-20210521142016066](http://image.brojie.cn/image-20210521142016066.png)

# 三. 项目的基本优化

## 1 自动重启服务

安装nodemon工具

```
npm i nodemon
```

编写`package.json`脚本

```json
"scripts": {
  "dev": "nodemon ./src/main.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

执行`npm run dev`启动服务

![image-20210521142807478](http://image.brojie.cn/image-20210521142807478.png)

## 2 读取配置文件

安装`dotenv`, 读取根目录中的`.env`文件, 将配置写`process.env`中

```
npm i dotenv
```

创建`.env`文件

```
APP_PORT=8000
```

创建`src/config/config.default.js`

```js
const dotenv = require('dotenv')

dotenv.config()

// console.log(process.env.APP_PORT)

module.exports = process.env
```

改写`main.js`

```js
const Koa = require('koa')

const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello api'
})

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
```

# 四. 添加路由

路由: 根据不同的URL, 调用对应处理函数

## 1 安装koa-router

```
npm i koa-router
```

步骤:

1. 导入包
2. 实例化对象
3. 编写路由
4. 注册中间件

## 2 编写路由

创建`src/router`目录, 编写`user.route.js`

```js
const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

// GET /users/
router.get('/', (ctx, next) => {
  ctx.body = 'hello users'
})

module.exports = router
```

## 3 改写main.js

```js
const Koa = require('koa')

const { APP_PORT } = require('./config/config.default')

const userRouter = require('./router/user.route')

const app = new Koa()

app.use(userRouter.routes())

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
```

