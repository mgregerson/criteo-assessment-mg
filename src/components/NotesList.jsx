import React from "react";

export const NotesList = (props) => {
  const { notes, activeNote, onSelect } = props;

  return (
    <div className="list-group">
      {activeNote !== null && (
        <div data-testid="note-item" className="list-group-item active">
          <h5>{activeNote.title}</h5>
          <p>Note ID: {activeNote.id}</p>
          <p>Note Text: {activeNote.text}</p>
        </div>
      )}

      {notes.map((note) => (
        <div
          onClick={() => onSelect(note)}
          key={note.id}
          data-testid="note-item"
          className="list-group-item"
        >
          <h5>{note.title}</h5>
          <p>Note ID: {note.id}</p>
          <p>Note Text: {note.text}</p>
        </div>
      ))}
    </div>
  );
};
