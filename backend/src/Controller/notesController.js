function getNotes(req,res){
    res.send("hello this is the sssssssssssss get aaaapi");
}

function createNotes(req,res){
    res.status(201).send("hello this is the sssssssssssss post aaaapi");
}
function updateNotes(req,res){
    res.status(200).send("hello this is the sssssssssssss put aaaapi");
}

function deleteNotes(req,res){
    res.status(200).send("hello this is the sssssssssssss delete aaaapi");
}
module.exports = {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};