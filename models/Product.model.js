const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    color: String,
    rating:Number,
    stock:Number,
    brand:String,
    category:String,
    thumbnail:String,
    images:[String],
});

const Product = mongoose.model('product', productSchema);



module.exports = Product;