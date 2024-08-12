const { links } = require("./indexController");
const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render('categories', { categories: categories, links: links });
}

async function getCategory(req, res) {
  //Get selected category from db -- wip
  const category = req.params.categoryHref;
  res.send(category);
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