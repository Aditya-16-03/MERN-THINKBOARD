const express = require("express");

const {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getNoteById,
} = require("../Controller/notesController.js");

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

module.exports = router;