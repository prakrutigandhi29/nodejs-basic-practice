const express=require('express');
const route=express.Router();
const reqfilter=require('./middleware')
const app=express()
route.use(reqfilter);

app.get('',(req,res)=>{
    res.send("Home Page")
})
route.get('/users',(req,res)=>{
    res.send("Users Page")
})
route.get('/contact',(req,res)=>{
    res.send("Contact Page")
})
app.use('/',route)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('ERROR')
  })

app.listen(3000);
