import React, { useState, useEffect } from "react";
import Note from "./Note";

function Notes() {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", content: "" });

  const changeNote = () => {
    console.log("PRE ADD ", allNotes);
    let titleInputValue =
      document.getElementById("TitleInputValue")?.value || "";
    let contentInputValue =
      document.getElementById("ContentInputValue")?.value || "";
    const newNote = { title: titleInputValue, content: contentInputValue };
    setCurrentNote(newNote);
    allNotes.push(newNote);
    setAllNotes(allNotes);
    // TODO: CLEAR NOTES on Submit
    titleInputValue = "";
    contentInputValue = "";

    console.log("POST ADD ", allNotes);
  };

  return (
    <div className="NotesPage">
      <div className="TitleInputSection">
        Title
        <input id="TitleInputValue" />
      </div>
      <div className="ContentInputSection">
        Content
        <textarea id="ContentInputValue" />
      </div>
      <button onClick={changeNote}>Add Note</button>
      {allNotes.map((note) => {
        return <Note note={note} />;
      })}
    </div>
  );
}

export default Notes;
