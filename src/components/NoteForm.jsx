// NoteForm.jsx
import React from "react";

export const NoteForm = (props) => {
  const {
    note = { title: "", text: "" },
    onCancel,
    onUpdate,
    onSubmit,
  } = props;

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    onUpdate({ ...note, title: newTitle });
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    onUpdate({ ...note, text: newText });
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(note);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input
          className="form-control"
          data-testid="input-title"
          name="title"
          value={note.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <label>Note:</label>
        <textarea
          className="form-control"
          data-testid="input-text"
          name="text"
          value={note.text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group">
        <input
          type="button"
          data-testid="cancel-note"
          className="btn btn-default pull-right"
          value="Cancel"
          onClick={handleCancel}
        />
        <input
          type="submit"
          data-testid="save-note"
          className="btn btn-default pull-right"
          value="Save"
        />
      </div>
    </form>
  );
};
