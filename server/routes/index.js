const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.use('/users', require('./users'));
router.use('/trees', require('./trees'));
router.get('(/*)?', async (req, res, next) => {
  res.sendFile(path.join(_dirname, '../client/build/index.html'));
});

module.exports = router;
