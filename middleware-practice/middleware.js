const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter age")
    }
    else if(req.query.age<18){
        res.send("You are not eligible")
    }
    else{
        next();
    }
    
}
module.exports=reqfilter;
