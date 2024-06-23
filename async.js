const fs = require("fs");
function ReadFile(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            fs.readFile("a.txt","utf-8",function(err,data){
                if(data){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        },2000);

    })
}

async function main(){
    const a = await ReadFile();
    console.log(a);
}
main()
console.log("First Statement to be printed");