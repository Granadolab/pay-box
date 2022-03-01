const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class User extends Model{
    //* below put code for catgory
}

User.init(
    {
        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        dni: {
        type: DataTypes.STRING,
        allowNull:false
        },
        email: {
        type: DataTypes.STRING,
        allowNull:false
        },
        password: {
        type: DataTypes.STRING,
        allowNull:false
        },
        phone: {
        type: DataTypes.STRING,
        allowNull:false
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: false,
    }
);

module.exports=User;
