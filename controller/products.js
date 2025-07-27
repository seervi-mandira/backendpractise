
const Product = require('../model/sceheme')
const testing = async(req, res) => {
const {name, company} = req.query
const query={};

if (name){
 query.name = name;
}
if(company){
           
             query.company= {$regex:company, $options: 'i'};
} 
 const Mydata = await Product.find(query);

             res.status(200).json({Mydata});

}
 module.exports = testing;



