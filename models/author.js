const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequelize");

class Author extends Model{};
Author.init({
    first_name: {
        type: DataTypes.STRING,
        validate: {
            len: [1,100]
        }
    },
    last_name: {
        type: DataTypes.STRING,
        validate: {
            len: [1,100]
        }
    }
}, {sequelize});

module.exports = Author;