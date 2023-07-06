import "./Note.css";

function Note(note) {
  return (
    <div className="IndividualNote">
      {" "}
      <div className="NoteTitle">{note.note.title}</div>
      <div className="NoteContent">{note.note.content} </div>
    </div>
  );
}

export default Note;
