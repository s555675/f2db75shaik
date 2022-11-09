var express = require('express'); 
const yogurt_controlers= require('../controllers/yogurt');
var router = express.Router(); 
 
/* GET yogurts */ 
router.get('/', yogurt_controlers.yogurt_view_all_Page ); 
module.exports = router; 