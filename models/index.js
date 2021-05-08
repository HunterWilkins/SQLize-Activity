const Author = require("./author");
const Book = require("./book");
const Genre = require("./genre");

Author.hasMany(Book);
Book.belongsTo(Author);

Genre.hasMany(Author);
Author.belongsTo(Genre);

Genre.hasMany(Book);
Book.belongsTo(Genre);

module.exports = {
    Author, Book, Genre
}