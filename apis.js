let url="https://cat-fact.herokuapp.com/facts";
let getfact=document.querySelector("#facts");
let data;
const getpro= async ()=>{
    console.log("Getting data...");
    let response=await fetch(url);
    console.log(response);
    data=await response.json();
    console.log(data);
    for(let i in data){
    getfact.innerText=data[i].text;
    }
}