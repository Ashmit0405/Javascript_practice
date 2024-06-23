//using simple nodejs

const http=require("http");
const fs=require("fs");
const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()} ${req.url} Request Received \n`;
    const html=`<h1>This is an html page<h1/>
    <br>
    <h1>Nani<h1/>`
    fs.appendFile("log.txt",log,(err,data)=>{
        console.log(err);
        console.log(data);        
        switch (req.url) {
            case "/about":
                    res.end("<p>SERVER IS ONLINE<p/>");
                break;
        
            default:
                console.log(res);
                    res.end(html);
                break;
        }
    });
    console.log("Received...");
    // res.end("Hello");
})

myserver.listen(8000,()=>{
    console.log("Started.");
});




//using express
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 8000;

// // Middleware to log requests
// app.use((req, res, next) => {
//     const log = `${Date.now()} ${req.url} Request Received\n`;
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//         }
//     });
//     next();
// });

// // Route to handle the root URL
// app.get('/', (req, res) => {
//     const html = `
//         <h1>This is an HTML page</h1>
//         <br>`;
//     res.send(html);
// });

// // Route to handle /about URL
// app.get('/about', (req, res) => {
//     res.send("<p>SERVER IS ONLINE</p>");
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
