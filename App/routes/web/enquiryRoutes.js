let express = require("express");
const { enquiryInsert, enquiryList, enquiryDel, enquiryUpd } = require("../../controllers/web/userEnquiryController");

let enquiryRoutes=express.Router();

enquiryRoutes.post("/enquiry-insert",enquiryInsert)
enquiryRoutes.get("/enquiry-list",enquiryList)
enquiryRoutes.delete("/enquiry-delete/:id",enquiryDel)
enquiryRoutes.put("/enquiry-update/:id",enquiryUpd)

module.exports=enquiryRoutes