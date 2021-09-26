// 1. 导入seq的连接
const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 2. 定义字段(模型)
const Address = seq.define('zd_addresses', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id',
  },
  consignee: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '收货人姓名',
  },
  phone: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    comment: '收货人的手机号',
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '收货人的地址',
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '是否为默认地址, 0:不是(默认值) 1: 是',
  },
})

// 3. 同步, sync
// Address.sync({ force: true })

// 4. 导出模型对象
module.exports = Address
