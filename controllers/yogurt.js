var yogurt = require('../models/yogurt'); 
 
// List of all yogurts 
exports.yogurt_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Yogurt list'); 
}; 
 
// for a specific yogurt. 
exports.yogurt_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt detail: ' + req.params.id); 
}; 
 
// Handle yogurt create on POST. 
exports.yogurt_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt create POST'); 
}; 
 
// Handle yogurt delete form on DELETE. 
exports.yogurt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt delete DELETE ' + req.params.id); 
}; 
 
// Handle yogurt update form on PUT. 
exports.yogurt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.yogurt_list = async function(req, res) { 
    try{ 
        theYogurts = await yogurt.find(); 
        res.send(theYogurts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.yogurt_view_all_Page = async function(req, res) { 
    try{ 
        theYogurts = await yogurt.find(); 
        res.render('yogurt', { title: 'Yogurt Search Results', Yogurtresults: theYogurts }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 