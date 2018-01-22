var express = require('express');
var router = express.Router();
const userRouter = require('./user');
const wikiRouter = require('./wiki')

router.use('/users', userRouter);
router.use('/wiki', wikiRouter);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
