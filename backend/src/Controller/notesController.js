export function getNotes(req,res){
    res.send("hello this is the sssssssssssss get aaaapi");
}

export function createNotes(req,res){
    res.status(201).send("hello this is the sssssssssssss post aaaapi");
}
export function updateNotes(req,res){
    res.status(200).send("hello this is the sssssssssssss put aaaapi");
}

export function deleteNotes(req,res){
    res.status(200).send("hello this is the sssssssssssss delete aaaapi");
}
