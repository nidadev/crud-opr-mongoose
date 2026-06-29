let express=require("express");
var mongoose=require("mongoose")
let enquiryModel=require("./models/enquiry.model")
require("dotenv").config()
let app=express();
app.use(express.json())

app.post("/api/enquiry-insert",(req,res)=>{
    let {name,email,phone,message} = req.body
    let enquiry= new enquiryModel({
        name:name,
        email:email,
        phone:phone,
        message:message
    })
    res.send("data received")

})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to mongoose")
    app.listen(process.env.PORT)
})