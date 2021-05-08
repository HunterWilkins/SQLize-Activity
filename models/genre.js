const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequelize");

class Genre extends Model {};

Genre.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,100]
        }
    }
}, {sequelize});

module.exports = Genre;