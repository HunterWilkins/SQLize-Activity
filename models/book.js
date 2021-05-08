const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequelize");

class Book extends Model {};

Book.init({
    title: {
        // Type of STRING
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
        // Length of 100
    }
}, {sequelize});

module.exports = Book;