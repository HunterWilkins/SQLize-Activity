const express = require("express");
const app = express();
const db = require("./models");
const sequelize = require("./config/connection.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET ROUTES

app.get("/api/books", (req, res) => {
    db.Book.findAll().then(results => {
        console.table(results);
        res.json(results);
    });
})

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Our server is running on 3000");
    })
});