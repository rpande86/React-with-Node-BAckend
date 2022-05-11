const mongoose=require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const userSchema=new mongoose.Schema({
    name:string,
    email:string,
    password:string
});



module.exports=mongoose.model("users",userSchema);