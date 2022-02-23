const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send(`<h1>Welcome</h1> <br> <a href="/about?name=Praks">Go to About page</a>`)
})
app.get('/about',(req,res)=>{
    res.send(`<input type="text" value=${req.query.name}></input><br>
    <a href="/">Go to home page</a>`
    )
})

app.listen(5000);