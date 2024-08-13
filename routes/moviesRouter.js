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
moviesRouter.get('/new', moviesController.newItemGet);
moviesRouter.post('/new', moviesController.newItemPost);
moviesRouter.get('/:itemId', moviesController.getItem);
moviesRouter.post('/:itemId/delete', moviesController.deleteItem);

module.exports = moviesRouter;