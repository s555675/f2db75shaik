var yogurt = require('../models/yogurt'); 
 
// List of all yogurts 
exports.yogurt_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Yogurt list'); 
}; 
 
// for a specific yogurt. 
exports.yogurt_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt detail: ' + req.params.id); 
}; 
 
// Handle Yogurt create on POST. 
exports.yogurt_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new yogurt(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.yogurt_flavour = req.body.yogurt_flavour; 
    document.calories = req.body.calories; 
    document.yogurt_size = req.body.yogurt_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle yogurt delete form on DELETE. 
exports.yogurt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt delete DELETE ' + req.params.id); 
}; 
 
// Handle yogurt update form on PUT. 
exports.yogurt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: yogurt update PUT' + req.params.id); 
}; 

// List of all yogurts 
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