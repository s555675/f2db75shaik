const mongoose = require("mongoose"); 
const yogurtSchema = mongoose.Schema({ 
    yogurt_flavour: {
        type: String,
        required: [true, "Flavour cannot be empty"]
    }, 
    calories: {
        type: Number,
        min: 0,
        max: 250,
        required: [true, "Calories cannot be empty"]
    }, 
    yogurt_size: {
        type: String,
        required: [true, "Size cannot be empty"]
    }
});
 
module.exports = mongoose.model("yogurt", yogurtSchema);