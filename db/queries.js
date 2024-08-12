const pool = require("./pool");

async function getAllCategories() {
  const result = await pool.query("SELECT * FROM categories");
  const categories = result.rows;
  return categories;
}

async function insertCategory(newCategory) {
  await pool.query("INSERT INTO categories (name, imageurl) VALUES ($1, $2)", [newCategory.name, newCategory.imageUrl]);
}

module.exports = {
  getAllCategories,
  insertCategory,
}