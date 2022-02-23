let a=10,b=0;

const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
}).then((b)=>{
    console.log(a+b);
})