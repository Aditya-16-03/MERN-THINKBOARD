const Note = require("../model/Note.js");

async function getNotes(req,res){
    try{
        const notes =await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }catch(error){
        console.error("Error at getNotes Controller notes:", error);
        res.status(500).json({ message: "Error fetching notes" });
    }
}

async function createNotes(req,res){
    try{
        const { title, content } = req.body;
        const newNote = new Note({
            title, content});
        await newNote.save();
        res.status(201).json({ message: "Note created successfully", note: newNote });
    }catch(error){
        console.error("Error at createNotes Controller notes:", error);
        res.status(500).json({ message: "Error creating note" });
    }
}
async function updateNotes(req,res){
    try{
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note updated successfully", note: updatedNote });
    }catch(error){
        console.error("Error at updateNotes Controller notes:", error);
        res.status(500).json({ message: "Error updating note" });
    }
}

async function deleteNotes(req,res){
    try{
        const { id } = req.params;
        const result = await Note.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully", note: result });
    }catch(error){
        console.error("Error at deleteNotes Controller notes:", error);
        res.status(500).json({ message: "Error deleting note" });
    }
}

async function getNoteById(req, res) {
    try {
      const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
      res.status(200).json(note);
    } catch (error) {
      console.error("Error at getNoteById Controller notes:", error);
      res.status(500).json({ message: "Error fetching note" });
    } 
}
module.exports = {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getNoteById,
};