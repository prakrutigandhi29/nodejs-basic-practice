const fs=require('fs');
const pathname=require('path');
const dir=pathname.join(__dirname,"files");

 for(i=0;i<5;i++){
     //create
    fs.writeFileSync(`${dir}/hello${i}.txt`,"Hello, I am Prakruti")
}

//read
fs.readdir(dir,(err,files)=>{
    files.forEach(element => {
        console.log(element);
    });
})

//update
fs.appendFile(`${dir}/hello1.txt`," Party",(err)=>{
    if(!err){
        console.log("File updated");
    }
})

//rename
fs.rename(`${dir}/hello1`,`${dir}/hello5.txt`,(err)=>{
    if(!err){
        console.log("File renamed");
    }
})

//delete
fs.unlinkSync(`${dir}/hello0.txt`)
