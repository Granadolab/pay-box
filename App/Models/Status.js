const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../Databases/db');

class Status extends Model{
    //* below put code for catgory
}

Status.init(
    {
        name: {
        type: DataTypes.STRING,
        allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'status',
        timestamps: false,
    }
);

module.exports=Status;
