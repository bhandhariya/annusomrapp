var express = require('express');
var router = express.Router();
var PostController=require('../controller.js/post_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/create',PostController.createPost);

router.get('/allPost',PostController.getAll);

router.post('/vote',PostController.vote);

module.exports = router;
