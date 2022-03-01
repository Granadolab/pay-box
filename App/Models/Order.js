const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

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

module.exports=Order;
