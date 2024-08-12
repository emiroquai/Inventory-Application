const pool = require("./pool");

async function getAllCategories() {
  const result = await pool.query("SELECT * FROM categories");
  const categories = result.rows;
  return categories;
}

module.exports = {
  getAllCategories,
}