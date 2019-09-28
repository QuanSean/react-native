const mongoose = require ('mongoose');
let Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

const PostSchema = mongoose.Schema({
    email:String,
    password: String,
    name: String,
    deleted: Boolean,
    key_repass:String,
    adress:String,
    tel:String
});
module.exports=mongoose.model ('User',PostSchema);