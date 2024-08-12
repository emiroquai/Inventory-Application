const { links } = require("./indexController");
// const db = require("../db/queries");

//Dummy categories -- to be deleted
const categories = [
  { href: "comedy", name: "Comedy", imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg" },
  { href: "action", name: "Action", imageUrl: "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg" },
  { href: "drama", name: "Drama", imageUrl: "https://nonstopnerd.com/wp-content/uploads/2023/07/or1.jpg" },
  { href: "sci-fi", name: "Sci-Fi", imageUrl: "https://www.indiewire.com/wp-content/uploads/2014/12/interstellar-tesseract.jpg?w=2048&h=1494&crop=1" },
];

async function getAllCategories(req, res) {
  //Get all categories from db -- wip
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
  getAllCategories,
  getCategory,
  newCategoryGet,
  newCategoryPost,
}