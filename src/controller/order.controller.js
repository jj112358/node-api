const { createOrder, findAllOrder } = require('../service/order.service')

class OrderController {
  async create(ctx) {
    // 准备数据
    const user_id = ctx.state.user.id
    const { address_id, goods_info, total } = ctx.request.body

    const order_number = 'XZD' + Date.now()

    const res = await createOrder({
      user_id,
      address_id,
      goods_info,
      total,
      order_number,
    })

    ctx.body = {
      code: 0,
      message: '生成订单成功',
      result: res,
    }
  }

  async findAll(ctx) {
    const { pageNum = 1, pageSize = 10, status = 0 } = ctx.request.query

    const res = await findAllOrder(pageNum, pageSize, status)

    ctx.body = {
      code: 0,
      message: '获取订单列表成功',
      result: res,
    }
  }
}

module.exports = new OrderController()
