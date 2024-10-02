const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, "please enter a name"]
    },
    email:{
        type : String,
        required : [true, "please enter an email"],
        unique : true
    },
    password:{
        type : String,
        required : [true, "please enter a password"]
    }
},
    {
        timestamp:true
    }
)

module.exports = mongoose.model("user", userSchema)