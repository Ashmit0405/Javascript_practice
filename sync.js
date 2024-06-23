// function hello(){
//     console.log("Hello World");
// }
// console.log("first");
// setTimeout(()=>{
//     console.log("Hello World");
// },2000);/*executes a function after a specific time interval which is passed in ms. it first executes the instructions after it immediately and then executes its required function after the specified time*/
// console.log("second");

const { resolve } = require("path");

// const { reject } = require("async");
// const { resolve } = require("path");

//callback
// function sum(a,b){
//     console.log(a+b);
// }
// function call(a,b,sumcallback){
//     sumcallback(a,b);
// }
// call(1,2,sum);
 
// callback nesting callback inside callback
// function getdata(data,seconddata){
//     setTimeout(()=>{
//         console.log("Data",data);
//         if(seconddata){
//             seconddata();
//         }
//     },2000);
// }
// //callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4);
//         })
//     });
// })

//promise
// let pro=new Promise((resolve,reject)=>{
//     console.log("Promise");
// });
// console.log(pro);

//promise chaining
// function getfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }
// function getfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }
// console.log("fetching data1...");
// let r=getfunc1();
// r.then((res)=>{
    //     console.log("Fetching data2...");
    //     let r2=getfunc2();
//     r2.then((res)=>{});
// });
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataid);
            resolve("Success");
        },2000);
    });
}
//promise chaining
// getdata(1).then((res)=>{
//     return getdata(2);
// })
// .then((res)=>{
//     return getdata(3);
// })
// .then((res)=>{
//     console.log(res);
// })

//async await final solution of promise chaining and callbacks
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },7000);
//     })
// }

// async function getweatherdata(){
//     await api();
// }
async function getalldata(){
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
    console.log("Getting data 7...");
    await getdata(7);
}
getalldata();