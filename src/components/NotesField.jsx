import React from "react";

import SearchNotes from "./SearchNotes";

export default function NotesField({ notesList, setNotesList }) {
  const activeNote = notesList.find((note) => note.isActive);

  function changeContent(ID, event) {
    setNotesList((currentList) =>
      currentList.map((note) => {
        if (note.id === ID) {
          return { ...note, value: event.target.value };
        } else return note;
      })
    );
  }

  function deleteActiveNote(ID) {
    setNotesList((currentList) =>
        currentList.filter((note) => note.id !== ID)
      );
  }

  return (
    <div className="notes-field">
      <textarea
        className="notes-field-textarea"
        value={activeNote ? activeNote.value : `Please, select a note.`}
        disabled={!activeNote}
        onChange={(e) => changeContent(activeNote.id, e)}
      ></textarea>
      <button className="notes-delete-button" disabled={!activeNote} onClick={() => deleteActiveNote(activeNote.id)}>
        Delete Note
      </button>
      <SearchNotes notesList={notesList} setNotesList={setNotesList} />
    </div>
  );
}
