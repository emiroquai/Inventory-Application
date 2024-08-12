const { links } = require("./indexController");
// const db = require("../db/queries");

//Dummy movies -- to be deleted
const movies = [
  { id: "1", name: "Mr Bean", imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg" },
  { id: "2", name: "John Wick", imageUrl: "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg" },
  { id: "3", name: "Oppenheimer", imageUrl: "https://nonstopnerd.com/wp-content/uploads/2023/07/or1.jpg" },
  { id: "4", name: "Interstellar", imageUrl: "https://www.indiewire.com/wp-content/uploads/2014/12/interstellar-tesseract.jpg?w=2048&h=1494&crop=1" },
];

async function getAllmovies(req, res) {
  //Get all movies from db -- wip
  res.render('movies', { movies: movies, links: links });
}

async function getItem(req, res) {
  //Get specific item from db -- wip
  const itemId = req.params.itemId;
  const item = movies.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).send('Movie not found');
  }
  
  res.render("item", { item: item, links: links });
}

module.exports = {
  getAllmovies,
  getItem,
}