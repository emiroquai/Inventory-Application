const { links } = require("./indexController");
// const db = require("../db/queries");

//Dummy movies -- to be deleted
const movies = [
  { id: "1", text: "Mr Bean", imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg" },
  { id: "2", text: "John Wick", imageUrl: "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg" },
  { id: "3", text: "Openheimer", imageUrl: "https://nonstopnerd.com/wp-content/uploads/2023/07/or1.jpg" },
  { id: "4", text: "Interstellar", imageUrl: "https://www.indiewire.com/wp-content/uploads/2014/12/interstellar-tesseract.jpg?w=2048&h=1494&crop=1" },
];

async function getAllmovies(req, res) {
  //Get all movies from db -- wip
  res.render('movies', { movies: movies, links: links });
}

async function getMovie(req, res) {
  //Get selected movie from db -- wip
  const movie = req.params.movieId;
  res.send(movie);
}
module.exports = {
  getAllmovies,
  getMovie,
}