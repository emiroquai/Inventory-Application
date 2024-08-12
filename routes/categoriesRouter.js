const { Router } = require('express');
const categoriesRouter = Router();
const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getAllCategories);
categoriesRouter.get('/:categoryHref', categoriesController.getCategory)

module.exports = categoriesRouter;