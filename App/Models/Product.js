
const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');


class Product extends Model {

 //* put any function them allow a efficient job

}

Product.init({
    //! Important : Mantain order of init
        // Model attributes are defined here
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
        },
        created_at: {
        type: DataTypes.DATE,
        allowNull:true
        },
        updated_at: {
        type: DataTypes.DATE,
        allowNull:true
        },
    
    },
    {
        sequelize,
        tableName: 'products',
        timestamps: false,
    },

);

module.exports = Product;
