const { Op } = require('sequelize')
const Cart = require('../model/cart.model')

class CartService {
  async createOrUpdate(user_id, goods_id) {
    // 根据user_id和goods_id同时查找, 有没有记录
    let res = await Cart.findOne({
      where: {
        [Op.and]: {
          user_id,
          goods_id,
        },
      },
    })

    if (res) {
      // 已经存在一条记录, 将number + 1
      await res.increment('number')
      return await res.reload()
    } else {
      return await Cart.create({
        user_id,
        goods_id,
      })
    }
  }
}

module.exports = new CartService()
