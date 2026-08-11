import Note from "../models/note.model.js";

// create New Notes
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({
      success: true,
      message: "Note Created Successfully",
      data: newNote,
    });
  } catch (error) {
    console.error("Error in creating notes", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// delete a note
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res
      .status(200)
      .json({ success: true, message: "Notes Deleted Successfully" });
  } catch (error) {
    console.error("Error in deleting Note");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// update a note
export const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updating note", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in fetching Notes", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get A single note by ID
export const getNotById = async (req, res) => {
  try {
    const { id } = req.params;
    const getNote = await Note.findById(id);
    if (!getNote) return res.status(404).json({ message: "Note Not Found" });
    res.status(200).json(getNote);
  } catch (error) {
    console.error("Error in fetching note");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
