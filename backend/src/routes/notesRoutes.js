const express =require("express");
import getNotes from "./Controller.notesController.js";
const router=express.Router();

router.get("/",getNotes);

router.post("/",(req,res)=>{
    res.status(201).send("hello this is the sssssssssssss post aaaapi");
})
router.put("/:id",(req,res)=>{
    res.status(200).send("hello this is the sssssssssssss put aaaapi");
})
router.delete("/:id",(req,res)=>{
    res.status(200).send("hello this is the sssssssssssss delete aaaapi");
})

export default router;