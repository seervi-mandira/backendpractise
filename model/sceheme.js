const mongoose = require('mongoose');

 const productScheme = new mongoose.Schema({
name:{
type: String,
required: true
},
company:{
type: String,
required: true
},


price:{
             type: Number,
             required: true
},
isStudent:{
             type: Boolean,
              required: true
}

 })

 module.exports= mongoose.model('Product', productScheme)