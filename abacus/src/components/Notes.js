import React, { useState, useEffect } from "react";
import "./Notes.css";

function Notes() {
  // const allNotes =[];
  const [currentNote, setCurrentNote] = useState({ title: "", content: "" });

  const changeNote = () => {
    const titleInputValue =
      document.getElementById("TitleInputValue")?.value || "";
    const contentInputValue =
      document.getElementById("ContentInputValue")?.value || "";
    const newNote = { title: titleInputValue, content: contentInputValue };
    setCurrentNote(newNote);
  };

  return (
    <div className="NotesPage">
      <div className="TitleInputSection">
        Title
        <input id="TitleInputValue" />
      </div>
      <div className="ContentInputSection">
        Content
        <input id="ContentInputValue" />
      </div>
      <button onClick={changeNote}>Add Note</button>
      <div className="IndividualNote">
        {" "}
        <div className="NoteTitle">{currentNote.title}</div>
        <div className="NoteContent">{currentNote.content} </div>
      </div>
    </div>
  );
}

export default Notes;
