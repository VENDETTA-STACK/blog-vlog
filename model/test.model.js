var mongoose = require('mongoose');
Schema = mongoose.Schema;

var newSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    company_name: { type: String },
    referred_by: { type: String },
    date_of_birth : { type: Date },
    gender : { type: String },
    address : { type: String },
    spouse_name : { type: String },
    spouse_birth_date : { type: Date },
    number_of_child : { type: Number },
    img: 
    { 
        data: String,
        contentType: String 
    },
    keyword : [{ type: String }],
    business_category : { type: String},
    experience : { type:String },
    about_business : { type:String },
    achievement : { type:String }

});

module.exports = mongoose.model("test",newSchema);