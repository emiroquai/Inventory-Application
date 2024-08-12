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
  console.log("Category to be saved: ", req.body.name);
  const newCategory = req.body;
  const href = newCategory.name.toLowerCase();
  newCategory.href = href;
  //await db.insertCategory(newCategory);
  categories.push(newCategory); // to be deleted
  res.redirect("/categories");
}

module.exports = {
  // categories,
  getAllCategories,
  getCategory,
  newCategoryGet,
  newCategoryPost,
}