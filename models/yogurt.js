const mongoose = require("mongoose"); 
const yogurtSchema = mongoose.Schema({ 
    yogurt_flavour: String, 
    calories: Number, 
    yogurt_size: String
});
 
module.exports = mongoose.model("yogurt", yogurtSchema);