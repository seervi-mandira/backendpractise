const express = require('express');
 const router = express.Router();
  const testing = require('../controller/products');

router.route('/').get(testing);


 module.exports = router;