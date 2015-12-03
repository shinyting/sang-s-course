var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '所有课程',
    allItem: [{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"express", "author":"人"}]
  });
});

/* GET mine page. */
router.get('/mine', function (req, res, next) {
  res.render('mine', {
    title: '我的',
    profile: {"pic":"fir.jpg", "name":"主题", "nickname":"主讲人"}
  });
});

/* GET myCourse page. */
router.get('/myCourse', function (req, res, next) {
  res.render('myCourse', {
    title: '我的课程',
    allItem: [{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"主题", "author":"主讲人"},{"pic":"fir.jpg", "title":"express", "author":"人"}]
  });
});

// GET about page
router.get('/about', function (req, res, next) {
	res.render('about', {
		title: "关于"
	});
});

// GET courseDetail page
router.get('/courseDetail', function (req, res, next) {
	res.render('courseDetail', {
		title: "课程详情"
	});
});

module.exports = router;
