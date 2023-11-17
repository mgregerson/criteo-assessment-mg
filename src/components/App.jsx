import React, { useState, useEffect } from "react";
import { NotesList } from "./NotesList";
import { NoteForm } from "./NoteForm";

export const App = (props) => {
  const { service } = props;

  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Fetch notes when the component is mounted
    const fetchData = async () => {
      const fetchedNotes = await service.getNotes();
      setNotes(fetchedNotes);
    };

    fetchData();
  }, [service]);

  // Select new empty note
  const newNote = () => {
    setSelected({ title: "", text: "" });
  };

  // Set note as selected
  const onSelect = (note) => {
    setSelected(note);
  };

  // Save note to service
  const onSubmit = (updatedNote) => {
    service.saveNote(updatedNote);
    setNotes([...service.notes]);
    setSelected(null);
  };

  // Unselect note
  const onCancel = () => {
    setSelected(null);
  };

  // Handle change of a note
  const onChange = (updatedNote) => {
    setSelected(updatedNote);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React notes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <NotesList
            notes={notes}
            activeNote={selected}
            onSelect={onSelect}
            saveNotes={service.saveNote}
          />
        </div>
        <div className="col-md-8">
          <NoteForm
            onSubmit={onSubmit}
            onCancel={onCancel}
            onUpdate={onChange}
            note={{
              title: selected ? selected.title : "",
              text: selected ? selected.text : "",
              id: selected ? selected.id : null,
            }}
          />
          {!selected && (
            <div>
              <button id="new-note" onClick={newNote}>
                New Note
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
