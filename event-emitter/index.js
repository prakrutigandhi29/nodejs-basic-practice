const express=require('express');
const EventEmitter=require('events')
const app=express();

const event=new EventEmitter();

let count=0;

event.on('countCalls',()=>{
    count++;
    console.log("Event called "+count);
})

app.get('/get',(req,res)=>{
    res.send("get api called")
    event.emit('countCalls')
})
app.put('/put',(req,res)=>{
    res.send("put api called")
    event.emit('countCalls')
})
app.get('/post',(req,res)=>{
    res.send("post api called")
    event.emit('countCalls')
})
app.listen(5000);