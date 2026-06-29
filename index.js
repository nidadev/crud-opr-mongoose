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
    enquiry.save().then(()=>{
    res.send({
        status:1,
        message:"data inserted"
    })

        //console.log("data save")
    }).catch((err)=>{
         res.send({
        status:0,
        message:"error"
    
    },err)
       // console.log(err)

    });

})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to mongoose")
    app.listen(process.env.PORT)
})