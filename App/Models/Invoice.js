const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class Invoice extends Model{
    //* below put code for catgory
}

Invoice.init(
    {
        // id: {
        // type: DataTypes.NUMBER,
        // allowNull: false,
        // primaryKey:true
        // },
        name_buyer: {
        type: DataTypes.STRING,
        allowNull: false
        },
        address_buyer: {
        type: DataTypes.STRING,
        allowNull: false
        },
        dni_buyer: {
        type: DataTypes.STRING,
        allowNull: false
        },
        phone_buyer: {
        type: DataTypes.STRING,
        allowNull: false
        },
        order_id: {
        type: DataTypes.NUMBER,
        allowNull:false
        },
        user_id: {
        type: DataTypes.NUMBER,
        allowNull:false
        },
        // updated_at: {
        // type: DataTypes.DATE,
        // allowNull:false
        // }
    },
    {
        sequelize,
        tableName: 'invoices',
        timestamps: false,
    }
);

module.exports=Invoice;
