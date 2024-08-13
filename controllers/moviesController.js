const { links } = require("./indexController");
const db = require("../db/queries");

//new item constructor
function Item (title, category_id, release_year, description, imageUrl) {
  this.title = title;
  this.category_id = category_id;
  this.release_year = release_year;
  this.description = description;
  this.imageUrl = imageUrl;
}

async function getAllmovies(req, res) {
  const movies = await db.getAllmovies();
  res.render('movies', { movies: movies, links: links });
}

async function getItem(req, res) {
  const movies = await db.getAllmovies();
  const itemId = Number(req.params.itemId);
  const item = movies.find(item => item.movie_id === itemId);
  const category = await db.getItemCategory(item);
  item.category = category.category_name;
  if (!item) {
    return res.status(404).send('Movie not found');
  }
  res.render("item", { item: item, links: links });
}

async function newItemGet(req, res) {
  const categories = await db.getAllCategories();
  res.render('newMovieForm', { links: links, categories: categories })
}

async function newItemPost(req, res) {
  const newItemCategoryId = await db.getCategoryId(req.body.category) 
  const newItem = new Item (req.body.title, newItemCategoryId, req.body.releaseYear, req.body.description, req.body.imageUrl)
  if (newItem.imageUrl === '') {
    newItem.imageUrl = "https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg";
  }
  await db.insertItem(newItem);
  res.redirect("/movies")
}

async function deleteItem(req, res) {
  const item_id = Number(req.params.itemId);
  await db.deleteItem(item_id);
  res.redirect("/movies");
}

module.exports = {
  getAllmovies,
  getItem,
  newItemGet,
  newItemPost,
  deleteItem
}