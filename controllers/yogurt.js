var yogurt = require('../models/yogurt'); 
 
// List of all yogurts 
exports.yogurt_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Yogurt list'); 
}; 
 
// for a specific yogurt. 
exports.yogurt_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await yogurt.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.yogurt_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await yogurt.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
    
}; 
 
// Handle yogurt update form on PUT. 
exports.yogurt_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await yogurt.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.yogurt_flavour)  
               toUpdate.yogurt_list = req.body.yogurt_flavour; 
        if(req.body.yogurt_size) toUpdate.yogurt_size = req.body.yogurt_size; 
        if(req.body.calories) toUpdate.calories = req.body.calories; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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
