import React, { useState, useEffect } from "react";

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
        Title: {currentNote.title} Content: {currentNote.content}{" "}
      </div>
    </div>
  );
}

export default Notes;
