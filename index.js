const express=require("express");
const app=express();
const port=4000;

app.get("/",(reuq,res)=>{
    res.send("<h1>Have A Nice Day !!</h1>");
});

app.listen(port);
console.log("Server is listining at port number 3000");