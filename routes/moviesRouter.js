const { Router } = require('express');
const moviesRouter = Router();
const moviesController = require('../controllers/moviesController');

moviesRouter.get('/', moviesController.getAllmovies);
moviesRouter.get('/:movieId', moviesController.getMovie)

module.exports = moviesRouter;