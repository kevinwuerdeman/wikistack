var express = require('express');
var router = express.Router();
const userRouter = require('./user');
const wikiRouter = require('./wiki')
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.use('/users', userRouter);
router.use('/wiki', wikiRouter);
/* GET home page. */
router.get('/', function(req, res, next) {

  Page.findAll({

  }).then(page => res.render('index', {pages: page}))
  //res.render('index', { title: 'Express' });
});

module.exports = router;
