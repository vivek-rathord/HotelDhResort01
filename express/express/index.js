//  <!-- import express from 'express'

// / const app = express()

// // app.get('/', (req, res) => {
// //   res.send('Hello World')
// // })

// // app.listen(3000)
// // const express = require('express');
// import express from 'express'
// const app = express();

// // app.get('/', (req, res) => {
// //   res.send('Hello World');
// // });
// app.get("/",(req,res) =>{
// res.send(`hello from home page ${req.params.Heading}`)
// })
// app.get("/about",(req,res) =>{
// res.send(`hello from about page `)
// })
// app.get("/contact",(req,res) =>{
// res.send(`hello from contact page`)
// })
// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });

import express from 'express'
const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render("home")
})
app.get('/about', (req, res)=>{
  res.render("about")
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
