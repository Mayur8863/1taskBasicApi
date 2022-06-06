const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/basic-api");

const personalSchema = new mongoose.Schema({
    name: String,
    firstName: String,
    lastName : String,
    emailID : String,
    phoneNo : Number,
    address : String,
}) ;

const personDetail = mongoose.model('personDetail',personalSchema);

module.exports = personDetail;
