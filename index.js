let express=require("express");
var mongoose=require("mongoose")
const { enquiryInsert, enquiryList, enquiryDel, enquiryUpd } = require("./App/controllers/web/userEnquiryController");
require("dotenv").config()
let app=express();
app.use(express.json())

app.post("/api/enquiry-insert",enquiryInsert)

app.get("/api/enquiry-list",enquiryList)

app.delete("/api/enquiry-delete/:id",enquiryDel)

app.put("/api/enquiry-update/:id",enquiryUpd)

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to mongoose")
    app.listen(process.env.PORT)
})