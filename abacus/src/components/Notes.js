import React, { useState, useEffect } from "react";
import Note from "./Note";

function Notes() {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", content: "" });

  const changeNote = () => {
    const newNote = { title: currentNote.title, content: currentNote.content };
    allNotes.push(newNote);
    setAllNotes(allNotes);
    setCurrentNote({ title: "", content: "" });
  };

  function editNote(note) {
    setCurrentNote(note);
  }

  return (
    <div className="NotesPage">
      <div className="TitleInputSection">
        <div className="NotesSectionLabel">Note Title</div>
        <input
          id="TitleInputValue"
          value={currentNote.title}
          onChange={(e) => {
            setCurrentNote({ ...currentNote, title: e.target.value });
          }}
        />
      </div>
      <div className="ContentInputSection">
        <div className="NotesSectionLabel">Content</div>
        <textarea
          id="ContentInputValue"
          value={currentNote.content}
          onChange={(e) => {
            setCurrentNote({ ...currentNote, content: e.target.value });
          }}
        />
      </div>
      <button onClick={changeNote}>Add Note</button>
      {allNotes.map((note) => {
        return <Note note={note} editFunc={editNote} />;
      })}
    </div>
  );
}

export default Notes;
