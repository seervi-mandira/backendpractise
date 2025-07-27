const mongoose = require('mongoose');

const connectDB = (uri) =>{
             return mongoose.connect(uri)
             
             
}
console.log('hello connecte to the atlas');
 module.exports = connectDB;