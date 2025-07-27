
//  require('dotenv').config();
//  const connectDB = require('./database/connecting');

// const projectJson = require('./project.json');
// const sceheme = require('./model/sceheme');



// const start = async() =>{
// try{
// await connectDB(process.env.MONGODB_URL)
// await sceheme.create(projectJson)
//  console.log('success');

// }catch(err){
// console.log(error)
// }
// }



// start();

require('dotenv').config();
const connectDB = require('./database/connecting');
const projectJson = require('./project.json');
const sceheme = require('./model/sceheme');

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await sceheme.deleteMany();
    await sceheme.create(projectJson);
    console.log('Success');
  } catch (error) {
    console.log('Error:', error);
  }
};

start();
