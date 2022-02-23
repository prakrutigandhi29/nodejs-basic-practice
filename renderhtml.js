const express=require('express');
const path=require('path');
const app=express();

const dirpath=path.join(__dirname,'public');

//app.use(express.static(dirpath));

app.get('',(req,res)=>{
    res.sendFile(`${dirpath}/index.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${dirpath}/about.html`);
})
app.get('*',(req,res)=>{
    res.sendFile(`${dirpath}/page404.html`);
})
app.listen(3000);
