const { Router } = require('express');
const moviesRouter = Router();
const moviesController = require('../controllers/moviesController');

//Redirect
moviesRouter.get('/home', function(req, res) {
  res.redirect('/home')
});
moviesRouter.get('/categories', function(req, res) {
  res.redirect('/categories')
});

moviesRouter.get('/', moviesController.getAllmovies);
moviesRouter.get('/:itemId', moviesController.getItem)

module.exports = moviesRouter;