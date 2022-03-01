
const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');


class Product extends Model {

 //* put any function them allow a efficient job

}

Product.init({

        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        price: {
        type: DataTypes.DOUBLE,
        // allowNull:true
        },
    
        status_id: {
        type: DataTypes.NUMBER,
        // allowNull:true
        },
    
        category_id: {
        type: DataTypes.NUMBER,
        // allowNull:true
        }
    },
    {
        sequelize,
        tableName: 'products',
        timestamps: false,
    },

);

module.exports = Product;
