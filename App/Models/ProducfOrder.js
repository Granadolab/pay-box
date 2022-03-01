const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class ProductOrder extends Model{
    //* below put code for catgory
}

ProductOrder.init(
    {
        order_id: {
        type: DataTypes.NUMBER,
        allowNull: false
        },
        product_id: {
        type: DataTypes.NUMBER,
        allowNull:false
        },
        quantity_product: {
        type: DataTypes.NUMBER,
        allowNull:false
        }
    },
    {
        sequelize,
        tableName: 'product_order',
        timestamps: false,
    }
);

module.exports=ProductOrder;
