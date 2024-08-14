const db = require("../db/queries");

const links = [
  { href: "/home", text: "Home" },
  { href: "/movies", text: "Movies" },
  { href: "/categories", text: "Categories" },
];

async function getHome (req, res) {
  const movies = await db.getAllmovies();
  const categories = await db.getAllCategories();
  res.render('home', { links: links, movies: movies, categories: categories });
}

module.exports = {
  links,
  getHome,
}