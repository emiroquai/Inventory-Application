const { links } = require("./indexController");
// const db = require("../db/queries");

//Dummy categories -- to be deleted
const categories = [
  { href: "comedy", text: "Comedy" },
  { href: "action", text: "Action" },
  { href: "drama", text: "Drama" },
  { href: "sci-fi", text: "Sci-Fi" },
];

async function getCategories(req, res) {
  //Get categories from db -- wip
  res.render('categories', { categories: categories, links: links });
}

module.exports = {
  getCategories,
}