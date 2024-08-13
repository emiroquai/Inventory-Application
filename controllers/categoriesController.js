const { links } = require("./indexController");
const db = require("../db/queries");
const capitalizeFirtLetter = require("../tools/capitalizeFirstLetter");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render('categories', { categories: categories, links: links });
}

async function getCategory(req, res) {
  const category_name = req.params.categoryHref;
  const category = await db. getCategory(category_name);
  res.render('movies', { movies: category, links: links, title: capitalizeFirtLetter(category_name) });
}

async function newCategoryGet(req, res) {
  res.render('newCategoryForm', { links: links });
}

async function newCategoryPost(req, res) {
  const newCategory = req.body;
  await db.insertCategory(newCategory);
  res.redirect("/categories");
}

module.exports = {
  getAllCategories,
  getCategory,
  newCategoryGet,
  newCategoryPost,
}