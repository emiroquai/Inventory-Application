const { Router } = require('express');
const categoriesRouter = Router();
const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getAllCategories);
categoriesRouter.get('/new', categoriesController.newCategoryGet);
categoriesRouter.post('/new', categoriesController.newCategoryPost);
categoriesRouter.get('/:category_name', categoriesController.getCategory);
categoriesRouter.post('/:category_name/delete', categoriesController.deleteCategory);

module.exports = categoriesRouter;