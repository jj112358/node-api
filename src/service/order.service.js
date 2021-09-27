const Order = require('../model/order.model')

class OrderService {
  async createOrder(order) {
    return await Order.create(order)
  }
}

module.exports = new OrderService()
