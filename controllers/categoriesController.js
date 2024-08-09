const { links } = require("./indexController");
// const db = require("../db/queries");

//Dummy categories -- to be deleted
const categories = [
  { href: "comedy", text: "Comedy", imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg" },
  { href: "action", text: "Action", imageUrl: "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg" },
  { href: "drama", text: "Drama", imageUrl: "https://nonstopnerd.com/wp-content/uploads/2023/07/or1.jpg" },
  { href: "sci-fi", text: "Sci-Fi", imageUrl: "https://www.indiewire.com/wp-content/uploads/2014/12/interstellar-tesseract.jpg?w=2048&h=1494&crop=1" },
];

async function getCategories(req, res) {
  //Get categories from db -- wip
  res.render('categories', { categories: categories, links: links });
}

module.exports = {
  getCategories,
}