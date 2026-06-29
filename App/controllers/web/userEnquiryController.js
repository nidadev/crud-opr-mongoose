const e=require("express")

const enquiryModel=require("../../models/enquiry.model")

let enquiryInsert=(req,res)=>{
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

}

let enquiryList=async (req,res)=>{
    let enquiryList = await enquiryModel.find()
 res.send({
        status:1,
        message:"enquiry list",
data:  enquiryList  
    })
}

let enquiryDel=async (req,res)=>{
    let {id} = req.params
    let deleteEnquiry = await enquiryModel.deleteOne({_id:id})
     res.send({
        status:1,
        message:"data deleted",
        id:id,
        delRes:deleteEnquiry
    })
    
}
let enquiryUpd=async (req,res)=>{
    let {id} = req.params
    let {name,email,phone,message} = req.body
    let enquiryUpdateObj= {
        name:name,
        email:email,
        phone:phone,
        message:message
    }
    let enquiryUpd = await enquiryModel.updateOne({_id:id},enquiryUpdateObj)
     res.send({
        status:1,
        message:"data updated",
        id:id,
        updRes:updateEnquiry
       
    })
    
}

module.exports={enquiryInsert,enquiryList,enquiryDel,enquiryUpd}