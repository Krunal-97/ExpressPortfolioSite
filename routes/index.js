var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { title: 'About Me'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('content/projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('content/services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { title: 'Contact Me'});
});

router.post('/contact', function(req, res, next) {
  console.log("Message");
});

module.exports = router;
