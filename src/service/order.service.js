const Order = require('../model/order.model')

class OrderService {
  async createOrder(order) {
    return await Order.create(order)
  }

  async findAllOrder(pageNum, pageSize, status) {
    const { count, rows } = await Order.findAndCountAll({
      attributes: ['goods_info', 'total', 'order_number', 'status'],
      where: {
        status,
      },
      offset: (pageNum - 1) * pageSize,
      limit: pageSize * 1,
    })

    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }

  async updateOrder(id, status) {
    return await Order.update({ status }, { where: { id } })
  }
}

module.exports = new OrderService()
