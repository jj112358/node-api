const User = require('../model/use.model')

class UserService {
  async createUser(user_name, password) {
    // 插入数据
    // User.create({
    //   // 表的字段
    //   user_name: user_name,
    //   password: password
    // })

    // await表达式: promise对象的值
    const res = await User.create({ user_name, password })
    // console.log(res)

    return res.dataValues
  }
}

module.exports = new UserService()
