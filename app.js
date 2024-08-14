require('dotenv').config()
console.log(process.env);
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

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => console.log(`Inventory Application - listening on port ${port}!`));