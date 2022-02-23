const express=require('express');
const app=express();

app.set('view engine','ejs')

app.get('/profile',(req,res)=>{
    const user={
        name:'Prakruti',
        age:'22',
        email:'praks@gmail.com',
        skills:['Java','c++','JavaScript']
    }
    res.render('profile',{user});
})
app.listen(3000);