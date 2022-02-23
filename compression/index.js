const express=require('express')
const app=express();
const compression=require('compression');
const req = require('express/lib/request');
app.use(compression({
    level:6,
    threshold:100*1000
}))
app.get('/',(req,res)=>{
    res.send("Hello Party".repeat(10000));
})
app.listen(5000);