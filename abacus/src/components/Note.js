import "./Note.css";

function Note(props) {
  console.log("This is edit func ", props);
  return (
    <div className="IndividualNote">
      <div className="NoteTitle">{props.note.title}</div>
      <div className="NoteContent">{props.note.content} </div>
      <button
        className="EditButton"
        onClick={() => {
          props.editFunc(props.note);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default Note;
