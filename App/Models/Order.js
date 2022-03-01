const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');
const Status = require('./Status');
const TypePay = require('./TypePay');
const ProductOrder = require('./ProducfOrder');
const Product = require('./Product');
class Order extends Model{
    //* below put code for catgory

}



Order.init(
    {
        type_pay_id: {
        type: DataTypes.NUMBER,
        allowNull: false
        },
        status_id: {
        type: DataTypes.NUMBER,
        allowNull: false
        },
        amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'orders',
        timestamps: false,
    }
);

//* Intance of relations
Order.hasOne(Status, { as: 'status', foreignKey: 'id', targetKey: 'status_id'});
Order.hasOne(TypePay, { as: 'typepay', foreignKey: 'id', targetKey: 'type_pay_id'});
Order.hasMany(ProductOrder, { as: 'productOrder', foreignKey: 'order_id', targetKey: 'id'});
Order.belongsToMany(Product, { as: 'products', through: ProductOrder, foreignKey: 'order_id', otherKey: 'id' });
module.exports=Order;
