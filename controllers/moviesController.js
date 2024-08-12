const { links } = require("./indexController");
// const db = require("../db/queries");
const { v4: uuidv4 } = require('uuid');

//new item constructor
function Item (title, category, releaseYear, description, imageUrl) {
  this.id = uuidv4();
  this.title = title;
  this.category = category;
  this.releaseYear = releaseYear;
  this.description = description;
  this.imageUrl = imageUrl;
}

//Dummy movies -- to be deleted
const movies = [
  { id: "1", title: "Mr Bean", imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg" },
  { id: "2", title: "John Wick", imageUrl: "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg" },
  { id: "3", title: "Oppenheimer", imageUrl: "https://nonstopnerd.com/wp-content/uploads/2023/07/or1.jpg" },
  { id: "4", title: "Interstellar", imageUrl: "https://www.indiewire.com/wp-content/uploads/2014/12/interstellar-tesseract.jpg?w=2048&h=1494&crop=1" },
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

async function newItemGet(req, res) {
  const { categories } = require("./categoriesController"); //Get categories from db -- wip
  res.render('newMovieForm', { links: links, categories: categories })
}

async function newItemPost(req, res) {
  // console.log("movie to be saved: ", req.body);
  const newItem = new Item (req.body.title, req.body.category, req.body.releaseYear, req.body.description, req.body.imageUrl)
  if (newItem.imageUrl === '') {
    newItem.imageUrl = "https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg";
  }
  //  await db.insertItem(newMovie); --Insert new item to db -- wip
  // console.log(newItem);
  movies.push(newItem); // to be deleted
  res.redirect("/movies")
}

module.exports = {
  getAllmovies,
  getItem,
  newItemGet,
  newItemPost,
}