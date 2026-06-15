const express= require("express");

const app=express();

app.get("/api/notes",(req,res)=>{
    res.send("hello this is the sssssssssssss get aaaapi");
})

app.post("/api/notes",(req,res)=>{
    res.status(201).send("hello this is the sssssssssssss post aaaapi");
})
app.put("/api/notes/:id",(req,res)=>{
    res.status(200).send("hello this is the sssssssssssss put aaaapi");
})
app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).send("hello this is the sssssssssssss delete aaaapi");
})


app.listen(5001,()=>{
    console.log("server is running on port 5001");
});