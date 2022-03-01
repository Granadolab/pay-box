const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class TypePay extends Model{
    //* below put code for catgory
}

TypePay.init(
    {
        name: {
        type: DataTypes.STRING,
        allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'type_pay',
        timestamps: false,
    }
);

module.exports=TypePay;
