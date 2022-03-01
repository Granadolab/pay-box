const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class Category extends Model{
    //* below put code for catgory
}

Category.init(
    {
        // id: {
        // type: DataTypes.NUMBER,
        // allowNull: false,
        // primaryKey:true
        // },
        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        // created_at: {
        // type: DataTypes.DATE,
        // allowNull:false
        // },
        // updated_at: {
        // type: DataTypes.DATE,
        // allowNull:false
        // }
    },
    {
        sequelize,
        tableName: 'categories',
        timestamps: false,
    }
);

module.exports=Category;

