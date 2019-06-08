const mongoose = require('./db');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    img: { type: String }
})

module.exports =  mongoose.model('products', ProductSchema);