const pool = require("./pool");

async function getAllCategories() {
  const result = await pool.query("SELECT * FROM categories");
  const categories = result.rows;
  return categories;
};

async function insertCategory(newCategory) {
  await pool.query("INSERT INTO categories (name, imageurl) VALUES ($1, $2)", [newCategory.name, newCategory.imageUrl]);
};

async function getAllmovies() {
  const result = await pool.query('SELECT * FROM movies');
  const movies = result.rows;
  return movies;
};

async function getItemCategory(item) {
  const result = await pool.query('SELECT m.movie_id, m.category_id, c.name AS category_name FROM Movies m JOIN Categories c ON m.category_id = c.category_id WHERE m.movie_id = $1;', [item.movie_id]);
  const itemCategory = result.rows[0];
  return itemCategory;
}

async function getCategoryId(category_name) {
  const result = await pool.query('SELECT category_id FROM categories WHERE name = $1', [category_name])
  const category_id = result.rows[0].category_id;
  return category_id;
};


async function getCategory(category_name) {
  const result = await pool.query('SELECT m.movie_id, m.title, m.release_year, m.description, m.imageUrl, c.name AS category_name FROM movies m JOIN categories c ON m.category_id = c.category_id WHERE LOWER(c.name) = $1', [category_name]);
  const category = result.rows;
  return category;
};

async function insertItem(newItem) {
  await pool.query("INSERT INTO movies (title, category_id, release_year, description, imageurl) VALUES ($1, $2, $3, $4, $5)", [newItem.title, newItem.category_id, newItem.release_year, newItem.description, newItem.imageUrl]);
};

async function deleteItem(item_id) {
  await pool.query('DELETE FROM movies WHERE movie_id = $1', [item_id]);
}

async function deleteCategory(category_name) {
  await pool.query('DELETE FROM movies WHERE category_id = (SELECT category_id FROM Categories WHERE name = $1)', [category_name]);
  await pool.query('DELETE FROM categories WHERE LOWER(name) = $1', [category_name]);
}

module.exports = {
  getAllCategories,
  insertCategory,
  getAllmovies,
  getItemCategory,
  getCategory,
  getCategoryId,
  insertItem,
  deleteItem,
  deleteCategory
};