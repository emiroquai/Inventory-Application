// const db = require("../db/queries");

const links = [
  { href: "home", text: "Home" },
  { href: "movies", text: "Movies" },
  { href: "categories", text: "Categories" },
];

async function getHome (req, res) {
  res.render('home', { links: links });
}

module.exports = {
  getHome,

}