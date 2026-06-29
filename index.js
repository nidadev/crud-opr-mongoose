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
        message:"error",
        error:err
    
    })
       // console.log(err)

    });

})

app.get("/api/enquiry-list",async (req,res)=>{
    let enquiryList = await enquiryModel.find()
 res.send({
        status:1,
        message:"enquiry list",
data:  enquiryList  
    })
})

app.delete("/api/enquiry-delete/:id",async (req,res)=>{
    let {id} = req.params
    let deleteEnquiry = await enquiryModel.deleteOne({_id:id})
     res.send({
        status:1,
        message:"data deleted",
        id:id,
        delRes:deleteEnquiry
    })
    
})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to mongoose")
    app.listen(process.env.PORT)
})