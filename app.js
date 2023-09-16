const http = require("http");
//basic
// const {sum} = require("./helper");
// const server = http.createServer((req, res) => {
//     res.end( sum(5,2));
// });
// server.listen(3000);

//express
// const express = require('express');
// const app = express();
 
// app.get('/',(req, res) =>{
//     res.send("Hello World from express");
// });
// app.listen(3000);

//file store
const fs= require('fs');
const errorHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());
const fileName = "target.txt";
//async
fs.watch(fileName, () => console.log('file changed') ); 
fs.readFile(fileName, (err, data) => {
    if(err){
        errorHandler(err);
    }
    dataHandler(data);
});

//syncddd
// const data = fs.readFileSync(fileName);
// console.log(data.toString());

 
console.log("Node js async programming");