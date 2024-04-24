const mongoose=require("mongoose")
const cicoSchema=mongoose.Schema({
   username:{
    type:String,
   },
    date:{
        type:String,
    },
    checkIn:{
        type:String,
    },
    checkOut:{
        type:String,
    }
})
module.exports = mongoose.model("cico",cicoSchema)