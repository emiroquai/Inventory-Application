require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require('./routes/indexRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const moviesRouter = require('./routes/moviesRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/movies", moviesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Inventory Application - listening on port ${PORT}!`));