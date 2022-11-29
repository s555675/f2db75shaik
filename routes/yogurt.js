var express = require('express'); 
const yogurt_controlers= require('../controllers/yogurt');
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET yogurts */ 
router.get('/', yogurt_controlers.yogurt_view_all_Page ); 

/* GET detail yogurt page */ 
router.get('/detail',secured, yogurt_controlers.yogurt_view_one_Page); 

/* GET create yogurt page */ 
router.get('/create', secured, yogurt_controlers.yogurt_create_Page); 

/* GET create update page */ 
router.get('/update', secured, yogurt_controlers.yogurt_update_Page); 

/* GET delete yogurt page */ 
router.get('/delete', secured, yogurt_controlers.yogurt_delete_Page); 
 

module.exports = router; 


