const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', function (req, res) {
  res.redirect('/home')
});
indexRouter.get('/home', indexController.getHome);

module.exports = indexRouter;