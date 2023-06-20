const express = require('express');
 const mongoose = require('mongoose');
  const Service = require('./models/services');
  const Experience = require('./models/experiences');
  const cors = require('cors');
 //express app
 const app = express();
 app.use(cors());

 //connect to mongodb
 const dbURI = 'mongodb+srv://mewoabi:doremi@cluster0.lvz80tk.mongodb.net/portfolio?retryWrites=true&w=majority';

 mongoose.connect(dbURI)
   .then(result=>{
      console.log('connected to db');
      app.listen(5000);
   })
 .catch(err=>console.log(err));
 

// register view engine
 app.set('view engine','ejs');

 //using middlewares
 app.use(express.static('public'));

 let data;

//mongoose and mongo sandbox routes
 app.get('/api/service/services',(req,res)=>{
  Service.find()
    .then(result=>{
      data = result;
      res.send(data);
    })
    .catch(err=>console.log(err));
 });

 app.get('/api/experience/experiences',(req,res)=>{
  Experience.find()
  .then(result=>{
    data = result;
    res.send(data);
  })
  .catch(err=>console.log(err));
 })

//  app.get('/',(req,res)=>{
//    const blogs = [
//       {title:"yoshi finds eggs",snippet:'lorem ipsum'},
//       {title:"mario finds stars",snippet:'lorem ipsum'},
//        {title:"how to defeat bowser",snippet:'lorem ipsum'}
//    ] 

//    res.render('index',{title:'Home',blogs});
//  });



//   app.get('/about',(req,res)=>{
//    res.render('about',{title:'About'});
//  });
 
// app.get ('/blogs/create',(req,res)=>{
//    res.render('create',{title:'Create a new blog'});
// })

//  app.use((req,res)=>{
//     res.status(404).render('404',{title:'404'})});
