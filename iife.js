//iife means immediately invoked function expression

// const { reject } = require("async");
// const { resolve } = require("path");

//these get executed as soon as they are written they are not called
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataid);
            resolve("Success");
        },2000);
    })
};

(async function(){
    console.log("Getting data 1...");
    await getdata(1);
    console.log("Getting data 2...");
    await getdata(2);
    console.log("Getting data 3...");
    await getdata(3);
    console.log("Getting data 4...");
    await getdata(4);
    console.log("Getting data 5...");
    await getdata(5);
    console.log("Getting data 6...");
    await getdata(6);
})();