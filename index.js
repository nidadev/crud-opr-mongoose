let express=require("express");
var mongoose=require("mongoose")
require("dotenv").config()
let app=express();
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to mongoose")
    app.listen(process.env.PORT)
})