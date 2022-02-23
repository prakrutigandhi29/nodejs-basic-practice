const express=require('express');
const app=express();
const multer=require('multer');
const route=express.Router();
const path = require('path');
const { nextTick } = require('process');
const maxSize=200 * 1024 * 1024;
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.render('homepage')
})



const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"/Users/prakrutig/Documents/Node-Practice/multer/uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.originalname+"_"+Date.now())
        }
        
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limit: {fileSize:maxSize},
    
}
);

app.post('/upload',upload.single("file"),(req,res)=>{
    res.send("File uploaded");
})

app.post('/uploads',upload.array("file"),(req,res,err)=>{
    res.send(err);
})

app.post('/formdata',upload.array("file"),(req,res)=>{
    console.log(req.body.name);
    console.log("Files uploaded")
})
app.use("/form",route)
app.listen(5000);