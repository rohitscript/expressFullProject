const express=require("express");
const app =express()
const port=process.env.PORT || 8000;
const path=require("path");

const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    res.send("Welcome to Our Page");
})


app.get("/weather",(req,res)=>{
    res.send("Welcome to Our Page");
})


app.get("/about",(req,res)=>{
    res.send("Welcome to Our Page");
})

app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
})
