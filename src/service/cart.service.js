const { Op } = require('sequelize')
const Cart = require('../model/cart.model')
const Goods = require('../model/goods.model')

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

  async findCarts(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Cart.findAndCountAll({
      attributes: ['id', 'number', 'selected'],
      offset: offset,
      limit: pageSize * 1,
      include: {
        model: Goods,
        as: 'goods_info',
        attributes: ['id', 'goods_name', 'goods_price', 'goods_img'],
      },
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
}

module.exports = new CartService()
