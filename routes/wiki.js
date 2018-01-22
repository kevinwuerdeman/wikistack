var express = require('express');
var router = express.Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/')
});

router.post('/', function(req, res, next) {
  let page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  page.save()
  .then(res.json(page));
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

module.exports = router;
