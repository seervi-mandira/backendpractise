// require('dotenv').config();
// const express = require('express');
// const { route } = require('./route/product');
// const app= express();
//  const connectDB = require('./database/connecting');
//  const product_routes =  require('./route/product');
// app.get('/', (req, res) =>{
//     res.send('hello i am mandira');
// })

// app.use('/api/products', product_routes);
// connectDB()



//  app.listen(5000, () =>{ 
//     console.log('hello byess')
//  })



require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/connecting');
const product_routes = require('./route/product');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, I am Mandira');
});

app.use('/api/products', product_routes);

// Async function to start the server
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB to express");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
};

startServer(); // Call the async function
