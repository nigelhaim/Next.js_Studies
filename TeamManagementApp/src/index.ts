//input 'node .' on terminal to run the server
console.log("Server started!");
import * as React from "react";


const app = require('express')();
const PORT = 4000;

app.listen(
  PORT, 
  () => console.log(`server is running on localhost:${PORT}`)
);

app.get('/', (req,res)=>{
  res.send("On this branch try use tsx and import data from the database");
});
