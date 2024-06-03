const mongoose = require("mongoose");

// create Schema
const userDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,   
    },
    picture: {
        type: String,
        required: true ,
    },

},
{timestamps: true}
);


// create Model 

const userData = mongoose.model('UserData', userDataSchema)
module.exports = userData;



