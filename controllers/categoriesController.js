const { links } = require("./indexController");
const db = require("../db/queries");
const capitalizeFirtLetter = require("../tools/capitalizeFirstLetter");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render('categories', { categories: categories, links: links });
}

async function getCategory(req, res) {
  const category_name = req.params.category_name;
  const category = await db. getCategory(category_name);
  res.render('category', { category: category, links: links, title: capitalizeFirtLetter(category_name), category_name: category_name });
}

async function newCategoryGet(req, res) {
  res.render('newCategoryForm', { links: links });
}

async function newCategoryPost(req, res) {
  const newCategory = req.body;
  if (newCategory.imageUrl === '') {
    newCategory.imageUrl = "https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg";
  }
  await db.insertCategory(newCategory);
  res.redirect("/categories");
}

async function deleteCategory(req, res) {
  const category_name = req.params.category_name;
  console.log(category_name)
  await db.deleteCategory(category_name);
  res.redirect('/categories');
}

module.exports = {
  getAllCategories,
  getCategory,
  newCategoryGet,
  newCategoryPost,
  deleteCategory,
}