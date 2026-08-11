import express from "express";
import {
  createNote,
  deleteNote,
  getNotById,
  getNotes,
  updateNotes,
} from "../controllers/notes.controller.js";

const route = express.Router();

route.get("/", getNotes);
route.post("/", createNote);
route.put("/:id", updateNotes);
route.delete("/:id", deleteNote);
route.get("/:id", getNotById);

export default route;
